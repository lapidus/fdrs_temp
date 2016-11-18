import React from "react"
import { connect } from "react-redux"
import Datamap from "datamaps"
import { isNumber, groupBy, each, find } from "lodash"
import Select from "react-select"

import { fetchNationalSocieties } from "../../actions/appActions"
import numberFormatter from "../../utils/numberFormatter"
import niceNum from "../../utils/niceNum"
import BreadCrumbs from "../../components/Breadcrumbs"
import Icon from "../../components/Icon"

class DataView extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      society: "World",
      indicators : [
        { icon: "heart",     key: "KPI_Number_of_People_Volunteering"         },
        { icon: "work",      key: "KPI_Number_of_PaidStaff"                   },
        { icon: "drop",      key: "KPI_Total_Number_of_People_Donating_Blood" },
        { icon: "flag",      key: "KPI_Number_of_Local_Units"                 },
        { icon: "usergroup", key: "KPI_Number_of_People_Reached_AllServices"  },
        { icon: "back",      key: "Total_Expenditure_CHF", currency: "CHF"    },
        { icon: "goto",      key: "Total_Income_CHF", currency: "CHF"         }
      ],
      indicator : undefined,
      societies : {},
      years: [],
      currentYear: undefined,
      year : undefined
    }

    this.logChange = this.logChange.bind(this)
    // this.handleClick = this.handleClick.bind(this)
    this.setSociety = this.setSociety.bind(this)
    this.changeYear = this.changeYear.bind(this)
    this.updateBubbles = this.updateBubbles.bind(this)
    this.setIndicator = this.setIndicator.bind(this)
    this.setDomain = this.setDomain.bind(this)
    this.getDatum = this.getDatum.bind(this)
    this.getRadius = this.getRadius.bind(this)
    this.setupIndicators = this.setupIndicators.bind(this)
    this.loadKPIData = this.loadKPIData.bind(this)

    this.niceNum = niceNum
    this.t = this.props.content[this.props.language].data
    this.name = "data"

    this.setupIndicators(undefined)
  }

  logChange(val) {
    console.log("Selected: " + val)
    this.setSociety(val)
  }

  loadKPIData() {
    // Map data
    d3.json("/api/data/data.json", (response) => {

      this.data = response

      var addYearTotal = (data) => {
        each(data, (yearData, key) => {
          var yearTotal = {
            "country_name":"World",
            "society_name":"World",
            "iso3" : "World",
            "KPI_Year": key,
            "KPI_Number_of_People_Volunteering": 0,
            "KPI_Number_of_PaidStaff": 0,
            "KPI_Total_Number_of_People_Donating_Blood": 0,
            "KPI_Number_of_Local_Units": 0,
            "KPI_Number_of_People_Reached_AllServices": 0,
            "Total_Expenditure_CHF": 0,
            "Total_Income_CHF": 0
          }
          this.state.indicators.forEach((indicator) => {
            yearTotal[indicator.key] = d3.sum(yearData, (d) => d[indicator.key])
          })
          yearData.push(yearTotal)
        })
        return data
      }

      var societiesByYear = addYearTotal(groupBy(response, "KPI_Year"))
      var years = Object.keys(societiesByYear)
      var currentYear = years[years.length - 1]

      d3.json("/api/data/centroids.json", (response) => {
        this.centroids = response
        this.setState({
          years: years,
          year: currentYear,
          society: societiesByYear[currentYear].find((d) => d.iso3 === "World"),
          societies: societiesByYear
        }, () => {
          console.log("Pre set domain")
          this.setDomain()
          this.setSociety("World")
          this.updateBubbles()
        })
      })
    })
  }

  componentDidMount() {

    var self = this

    this.width = this.refs.mapContainer.offsetWidth
    this.height = window.innerHeight - 215

    const mapOptions = {
      element: this.refs.mapContainer,
      responsive: true,
      height: this.height,
      setProjection: function(element) {
        var projection = d3.geo.times()
          .center([15, -2])
          .scale(element.offsetWidth / 5)
          .translate([element.offsetWidth / 2, element.offsetHeight / 1.75])
        var path = d3.geo.path()
          .projection(projection)
        return { path: path, projection: projection }
      },
      fills: {
        defaultFill: "#ddd",
        bubbleFill: "#EE3224",
        bubbleFillEmpty: "#aaa"
      },
      geographyConfig: {
        popupOnHover: false,
        highlightOnHover: false,
        borderWidth: 1,
        borderColor: "#fff"
      },
      done(datamap) {
        let mouseDownPosition

        self.zoom = d3.behavior.zoom()
                      .on("zoom", self.zoomed.bind(self))

        datamap.svg.style({"cursor":"move"})

        datamap.svg.call(self.zoom)
          .on("wheel.zoom", null)
          .on("dblclick.zoom", null)

        d3.selectAll(".zoom-button")
            .on("click", function() {

              let direction = 1,
                factor      = 0.3,
                targetZoom  = 1,
                center      = [self.width / 2, self.height / 2],
                extent      = self.zoom.scaleExtent(),
                translate   = self.zoom.translate(),
                translate0  = [],
                l           = [],
                view        = {x: translate[0], y: translate[1], k: self.zoom.scale()}

              event.preventDefault()
              direction = (this.id === "zoom-in") ? 1 : -1
              targetZoom = self.zoom.scale() * (1 + factor * direction)

              if (targetZoom < extent[0] || targetZoom > extent[1]) return false

              translate0 = [(center[0] - view.x) / view.k, (center[1] - view.y) / view.k]
              view.k = targetZoom
              l = [translate0[0] * view.k + view.x, translate0[1] * view.k + view.y]

              view.x += center[0] - l[0]
              view.y += center[1] - l[1]

              self.interpolateZoom.call(self, [view.x, view.y], view.k)
            })

        // Add mouse interactions for the countries
        datamap.svg.selectAll(".datamaps-subunit")
          .on("mousedown", function (d) {
            mouseDownPosition = d3.mouse(datamap.svg.node())
          })
          .on("mouseup", function (d) {
            var mouseUpPosition

            // If it was a drag, then do nothing
            mouseUpPosition = d3.mouse(datamap.svg.node())
            if (Math.abs(mouseDownPosition[0] - mouseUpPosition[0]) > 3 ||
              Math.abs(mouseDownPosition[1] - mouseUpPosition[1]) > 3) return
          })

        datamap.svg
          .on("click", (d) => {
            const target = d3.select(d3.event.target)
            if (target.classed("datamaps-bubble")) {
              self.setSociety(JSON.parse(target.attr("data-info")).iso3, true)
            }
          })

        self.loadKPIData()
      }
    }

    this.map = new Datamap(mapOptions)
  }

  setSociety(iso3) {
    console.log("iso3", iso3, this.state.societies[this.state.year].find((d) => d.iso3 === iso3))
    this.setState({
      society : this.state.societies[this.state.year].find((d) => d.iso3 === iso3)
    }, () => {
      console.log("society", this.state.society)
      this.updateBubbles()
    })
  }

  changeYear(year) {
    this.setState({
      year : year
    }, () => {
      this.setSociety(this.state.society.iso3)
    })
  }

  updateBubbles() {

    if (!this.centroids || !this.data) return

    let bubbles = []
    this.map.svg.selectAll(".datamaps-subunit").each((geography) => {
      let datum = this.getDatum(geography.id, this.state.year)

      if (datum) {
        let value = datum[this.state.indicator.key]
        let centroid = this.centroids.find((c) => c.iso2 === datum.iso2)
        bubbles.push({
          customClass: this.state.society.iso3 == "World" ? false : this.state.society.iso3 === geography.id ? "is-focused" : false,
          value: niceNum(value),
          name: datum.society_name,
          icon: this.state.indicator.icon,
          indicator: this.t.indicators[this.state.indicator.key],
          fillKey: isNumber(value) ? "bubbleFill" : "bubbleFillEmpty",
          iso3: geography.id,
          latitude: centroid.lat,
          longitude: centroid.long,
          fillOpacity : this.state.society.iso3 == "World" ? 0.9 : this.state.society.iso3 === geography.id ? 0.9 : 0.3,
          borderOpacity : this.state.society.iso3 == "World" ? 0.9 : this.state.society.iso3 === geography.id ? 0.9 : 0.3,
          borderColor: this.state.society && this.state.society.iso3 === geography.id ? "#fff" : "#fff",
          borderWidth: this.state.society && this.state.society.iso3 === geography.id ? 2 : 1,
          radius: this.getRadius(value)
        })
      }
    })

    bubbles.sort((a, b) => b.radius - a.radius)

    var self = this

    this.map.bubbles(bubbles, {
      highlightOnHover: false,
      key (d, i) {
        return d.iso3
      },
      popupTemplate (geo, data) {
        var nationalSociety = find(self.props.nationalSocieties, { iso_3: data.iso3 })

        return `
          <div class="map-tooltip">
            <strong>${nationalSociety[self.props.language]}</strong>
            <div class="map-tooltip-content m-t-05">
              <span class="m-r-05">
                <span class="map-tooltip-label">
                  ${data.indicator}
                </span>
              </span>
              <strong>${data.value}</strong>
            </div>
          </div>
        `
      }
    })
  }

  setIndicator (indicator) {
    console.log("setIndicator", indicator)
    this.setState({
      indicator : indicator,
    }, function (){
        this.setDomain()
        this.updateBubbles()
    })
  }

  setDomain() {
    this.domain = d3.extent(this.data, (d) => d[this.state.indicator.key])
  }

  getDatum(id, year) {
    // return this.dataByYear[year].find((d) => d.iso3 === id)
    return this.state.societies[year].find((d) => d.iso3 === id)
  }

  getRadius(value) {
    const radius = d3.scale.sqrt().domain(this.domain).range([4, 30])
    return radius(value)
  }

  setupIndicators (slug) {
    this.state.indicators = [
      { icon: "heart", slug: "volunteers", key: "KPI_Number_of_People_Volunteering" },
      { icon: "work", slug: "paid-staff", key: "KPI_Number_of_PaidStaff" },
      { icon: "drop", slug: "blood-donors", key: "KPI_Total_Number_of_People_Donating_Blood" },
      { icon: "flag", slug: "local-units", key: "KPI_Number_of_Local_Units" },
      { icon: "usergroup", slug: "people-reached", key: "KPI_Number_of_People_Reached_AllServices" },
      { icon: "back", slug: "expenditure", key: "Total_Expenditure_CHF", currency: "CHF" },
      { icon: "goto", slug: "income", key: "Total_Income_CHF", currency: "CHF" }
    ].map((i) => {
      i.translateKey = `data.indicators.${i.key}`
      return i
    })

    if (slug) this.state.indicator = this.state.indicators.find((i) => i.slug === slug)
    if (!this.state.indicator) this.state.indicator = this.state.indicators[0]
  }

  zoomed () {
    this.map.svg.selectAll("g").attr("transform", "translate(" + this.zoom.translate() + ")scale(" + this.zoom.scale() + ")")
  }

  interpolateZoom (translate, scale) {
    return d3.transition().duration(350).tween("zoom", () => {
      let iTranslate = d3.interpolate(this.zoom.translate(), translate),
        iScale = d3.interpolate(this.zoom.scale(), scale)
      return (t) => {
        this.zoom
          .scale(iScale(t))
          .translate(iTranslate(t))
        this.zoomed.call(this)
      }
    })
  }

  render() {

    return (
      <div>
        <div className="clearfix bg-primary-dark">
          <div className="col sm-6 sm-offset-3 py1">
            <BreadCrumbs chapter={{title:"Data"}} language={this.props.language}/>
          </div>
        </div>
        <div className="clearfix bg-primary pt1">
          <div className="col sm-6 sm-offset-3">
            <h2 className="display-2">{this.props.content[this.props.language].data.title}</h2>
            <p className="title">{this.props.content[this.props.language].data.subtitle}</p>
          </div>
        </div>
        <div className="clearfix" style={{overflow:"hidden",position:"relative"}}>

          <div className="col sm-9 sm-offset-3">
            <div className="col col-md-9">
              <div id="map-container" className="map-container" ref="mapContainer">
                <div id="map-zoom-buttons" className="map-zoom-buttons">
                  <div id="zoom-in" className="btn bg-secondary zoom-button">
                    <span className="headline">+</span>
                  </div>
                  <div id="zoom-out" className="btn bg-secondary zoom-button">
                    <span className="headline">–</span>
                  </div>
                </div>

                <div className="center pb2" style={{position: "absolute",bottom:0,width:"100%",zIndex:99}}>
                  <button className={this.state.year == 2012 ? "btn bg-primary p1 is-focused" : "btn bg-primary p1"} onClick={()=>this.changeYear(2012)}>
                    2012
                  </button>
                  <button className={this.state.year == 2013 ? "btn bg-primary p1 is-focused" : "btn bg-primary p1"} onClick={()=>this.changeYear(2013)}>
                    2013
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col sm-3 data-sidebar bg-data-sidebar">
            <div>
              <div className="clearfix">
                <div className="data-select px1 py1">
                  <Select
                    className=""
                    name="form-field-name"
                    value={this.state.society.iso3}
                    clearable={false}
                    valueKey="iso3"
                    labelKey="society_name"
                    options={this.state.societies[this.state.year]}
                    onChange={this.logChange.bind(this)}
                  />
                </div>
              </div>

              <p className="px2">
                {this.props.content[this.props.language].data.guide}:
              </p>

              <ul className="indicator-list pt0 pb3">
                {this.state.indicators.map((item, i) => {
                  return (
                    <li key={i} onClick={() => this.setIndicator(item)} className={item.key == this.state.indicator.key ? "indicator is-active clearfix px2" : "indicator clearfix px2"}>
                      <div className="col md-8 indicator-label">
                        <Icon name={item.icon} height="20px" />&nbsp
                        { this.props.content[this.props.language].data.indicators[item.key] }
                      </div>
                      <div className="col md-4 indicator-value">
                        { numberFormatter.addCommas(this.niceNum(this.state.society[item.key])) } { item.currency }
                      </div>
                    </li>
                )})}
              </ul>
            </div>
          </div>

        </div>
      </div>

    )
  }

}

DataView.needs = [ fetchNationalSocieties ]

function mapStateToProps(state) {
  return {
    language: state.appReducer.language,
    translations: state.appReducer.data,
    content: {
      en: state.appReducer.en,
      fr: state.appReducer.fr,
      es: state.appReducer.es,
      ar: state.appReducer.ar,
    },
    nationalSocieties: state.appReducer.nationalSocieties
  }
}

export default connect(mapStateToProps)(DataView)
