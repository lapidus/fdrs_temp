import React from "react"

import Card from "../components/cards/Card";
import CardView from "../components/cards/CardView";
import CardOverlay from "../components/cards/CardOverlay";
//
// class Society extends React.Component {
//   render() {
//     const { id } = this.props.params
//     return (
//       <div className="py4 pl2">
//         <h1>{ "Society profile page" }</h1>
//         <div>{ `Society id: ${id}` }</div>
//       </div>
//     )
//   }
// }
class Society extends React.Component {
  render() {
    return (
      <section>

        <div className="px1">
          <div className="clearfix mxn1">
            <header className="col sm-8 sm-offset-3 px1 py1">
              <p className="color-primary strong m0 small">Sub-Saharan Africa</p>
              <h1 className="display-2 light m0">{ this.props.params.id }</h1>
            </header>
          </div>

          <div className="clearfix mxn1">
            <aside className="col sm-3 md-2 md-offset-1 pr1">
              { /* <StickySidebar>
                <h1 className="title">National Societies</h1>
                <ul className="m0 p0">
                  <li className="block mb1 color-primary">Burundi Red Cross</li>
                  <li className="block mb1">Cambodian Red Cross Society</li>
                  <li className="block mb1">Cameroon Red Cross Society</li>
                  <li className="block mb1">Colombian Red Cross Society</li>
                  <li className="block mb1">Red Crescent Society of Djibouti</li>
                  <li className="block mb1">Ethiopian Red Cross Society</li>
                  <li className="block mb1">French Red Cross</li>
                  <li className="block mb1">Gabonese Red Cross Society</li>
                  <li className="block mb1">The Gambia Red Cross Society</li>
                  <li className="block mb1">German Red Cross</li>
                  <li className="block mb1">Honduran Red Cross</li>
                  <li className="block mb1">Icelandic Red Cross</li>
                  <li className="block mb1">Red Cross Society of the Democratic People’s Republic of Korea</li>
                </ul>
              </StickySidebar> */ }
              { "Sidebar" }
            </aside>

            <div className="col sm-9 md-8 px1">

              <div className="clearfix mxn1 pb2">
                <div className="col sm-8 px1 pb1">
                  <p className="lead">Burundi Red Cross was admitted to the IFRC in 1977.  In 2015, it counted 12,400 active volunteers (up from 10,000 in 2011), of which 60% were male and 40% female.</p>
                  <p className="lead">Key proxy indicators reported by the National Society since 2012 are available below, as well as copies of additional key documents.</p>
                </div>
                <div className="col sm-4 px1">
                  <svg width="318px" height="345px" viewBox="0 0 318 345">
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <g fill="#F6F4F4">
                        <path d="M10,52.7591463 L10.4573171,51.3871951 L13.2012195,54.3597561 L14.1158537,53.2164634 L17.5457317,52.3018293 L20.5182927,54.1310976 L19.8323171,56.1890244 L18.9176829,54.8170732 L16.1737805,54.1310976 L12.7439024,54.8170732 L10,52.7591463 Z M61.972561,17 L64.972561,20 L66.972561,21 L72.972561,20 L73.972561,21 L77.972561,21 L79.972561,19 L89.972561,14 L96.972561,13 L97.972561,13 L105.972561,12 L107.972561,13 L111.972561,12 L114.972561,12 L117.972561,11 L119.972561,12 L123.972561,12 L127.972561,10 L130.972561,13 L132.972561,11 L133.972561,12 L130.972561,15 L131.972561,17 L133.972561,18 L133.972561,20 L131.972561,24 L128.972561,25 L129.972561,28 L133.972561,27 L133.972561,30 L138.972561,32 L142.972561,32 L150.972561,34 L152.972561,38 L154.972561,39 L160.972561,40 L163.972561,42 L167.972561,44 L168.972561,44 L171.972561,42 L172.972561,40 L171.972561,37 L172.972561,35 L174.972561,33 L178.972561,31 L181.972561,31 L185.972561,33 L185.972561,34 L189.972561,36 L193.972561,36 L194.972561,38 L197.972561,38 L203.972561,39 L211.972561,42 L213.972561,41 L216.972561,38 L223.972561,38 L224.972561,40 L225.972561,39 L228.972561,40 L233.972561,39 L234.972561,42 L236.972561,47 L236.972561,48 L231.972561,59 L232.972561,61 L239.972561,74 L239.972561,78 L245.972561,82 L245.972561,84 L246.972561,88 L246.972561,90 L246.972561,95 L248.972561,97 L252.972561,100 L253.972561,103 L255.972561,109 L257.972561,112 L259.972561,109 L258.972561,113 L259.972561,114 L263.972561,115 L265.972561,118 L268.972561,120 L270.972561,123 L273.972561,125 L273.972561,127 L270.972561,128 L273.972561,130 L275.972561,132 L277.972561,134 L280.972561,134 L283.972561,132 L286.972561,133 L290.972561,131 L297.972561,130 L303.972561,129 L305.972561,127 L308,128 L306.972561,131 L307.972561,133 L305.972561,134 L305.972561,138 L303.972561,142 L301.972561,144 L297.972561,152 L293.972561,160 L284.972561,168 L278.972561,172 L273.972561,176 L267.972561,183 L265.972561,186 L259.972561,192 L254.972561,201 L253.972561,205 L254.972561,207 L255.972561,203 L256.972561,207 L255.972561,208 L256.972561,210 L255.972561,213 L258.972561,212 L255.972561,215 L256.972561,219 L257.972561,222 L260.972561,224 L261.972561,226 L260.972561,229 L261.972561,235 L260.972561,238 L262.972561,242 L261.972561,246 L258.972561,250 L254.972561,252 L249.972561,254 L245.972561,257 L243.972561,260 L235.972561,266 L235.972561,268 L236.972561,270 L237.972561,273 L238.972561,274 L239.972561,277 L238.972561,284 L238.972561,285 L237.972561,287 L231.972561,289 L227.972561,291 L227.972561,297 L225.972561,305 L222.972561,307 L220.972561,310 L216.972561,316 L210.972561,323 L206.972561,327 L200.972561,330 L196.972561,330 L196.972561,331 L193.972561,331 L192.972561,332 L187.972561,331 L186.972561,332 L182.972561,331 L179.972561,333 L175.972561,333 L171.972561,335 L166.972561,332 L164.972561,332 L165.972561,331 L162.972561,326 L164.972561,325 L163.972561,320 L160.972561,314 L157.972561,308 L152.972561,302 L151.972561,300 L149.972561,292 L149.972561,288 L147.972561,285 L148.972561,279 L147.972561,276 L145.972561,274 L143.972561,270 L141.972561,267 L138.972561,260 L136.972561,258 L135.972561,255 L136.972561,251 L136.972561,248 L136.972561,247 L138.972561,243 L139.972561,237 L144.972561,232 L144.972561,227 L144.972561,225 L142.972561,221 L141.972561,218 L143.972561,217 L142.972561,215 L140.972561,210 L140.972561,209 L138.972561,205 L137.972561,201 L136.972561,199 L128.972561,190 L125.972561,187 L125.972561,185 L124.972561,184 L123.972561,182 L125.972561,181 L125.972561,174 L127.972561,171 L128.972561,165 L126.972561,162 L123.972561,163 L123.972561,159 L110.972561,160 L109.972561,159 L108.972561,156 L106.972561,153 L104.972561,151 L101.972561,151 L93.972561,152 L90.972561,152 L89.972561,154 L86.972561,154 L81.972561,156 L75.972561,158 L74.972561,158 L67.972561,156 L59.972561,157 L52.972561,160 L49.972561,159 L44.972561,157 L39.972561,152 L35.972561,150 L33.972561,148 L28.972561,146 L30.972561,146 L28.972561,143 L27.972561,144 L26.972561,139 L26.972561,137 L22.972561,135 L20.972561,131 L18.972561,131 L17.972561,129 L15.972561,131 L14.972561,129 L16.972561,129 L18.972561,127 L14.972561,128 L12.972561,125 L11.972561,121 L13.972561,120 L10,115 L13.972561,110 L13.972561,106 L15.972561,101 L14.972561,96 L13.972561,94 L14.972561,90 L11.972561,86 L11.972561,83 L13.972561,81 L16.972561,74 L20.972561,70 L20.972561,67 L22.972561,63 L25.972561,61 L28.972561,55 L35.972561,53 L39.972561,50 L43.972561,45 L42.972561,42 L42.972561,39 L44.972561,36 L44.972561,33 L48.972561,30 L52.972561,28 L55.972561,26 L57.972561,22 L59.972561,18 L61.972561,17 Z M302.015244,259.655488 L300.015244,261.655488 L296.015244,274.655488 L296.015244,276.655488 L294.015244,283.655488 L292.015244,288.655488 L288.015244,289.655488 L285.015244,291.655488 L283.015244,291.655488 L278.015244,288.655488 L277.015244,286.655488 L277.015244,281.655488 L275.015244,278.655488 L275.015244,276.655488 L276.015244,271.655488 L278.015244,270.655488 L280.015244,265.655488 L280.015244,263.655488 L279.015244,259.655488 L278.015244,254.655488 L280.015244,251.655488 L280.015244,249.655488 L282.015244,249.655488 L284.015244,247.655488 L288.015244,246.655488 L291.015244,244.655488 L296.015244,239.655488 L295.015244,238.655488 L297.015244,236.655488 L299.015244,236.655488 L299.015244,233.655488 L301.015244,230.655488 L302.015244,233.655488 L304.015244,235.655488 L305.015244,238.655488 L305.015244,242.655488 L307.015244,245.655488 L305.015244,248.655488 L304.015244,245.655488 L303.015244,246.655488 L304.015244,250.655488 L302.015244,253.655488 L302.015244,259.655488 Z"></path>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>

              <div className="clearfix mxn1 pb2">

                <div className="col sm-6 lg-4 px1 pb2">
                  <Card>
                    <CardView>View 0</CardView>
                    <CardView>View 1</CardView>
                    <CardView>View 2</CardView>
                    <CardOverlay>
                      <p>This card shows the population statistics for Burundi. It is possible to view the aggregated numbers, as well as gender specific statistics.</p>
                      <p>The data comes from this source: <br /> <a href="#">source of the data</a></p>
                    </CardOverlay>
                  </Card>
                </div>

                <div className="col sm-6 lg-4 px1 pb2">
                  <Card>
                    <CardView>View 0</CardView>
                    <CardView>View 1</CardView>
                    <CardView>View 2</CardView>
                    <CardOverlay>
                      <p>This card shows the population statistics for Burundi. It is possible to view the aggregated numbers, as well as gender specific statistics.</p>
                      <p>The data comes from this source: <br /> <a href="#">source of the data</a></p>
                    </CardOverlay>
                  </Card>
                </div>

                <div className="col sm-12 lg-4 px1 pb2">
                  <Card>
                    <CardView>View 0</CardView>
                    <CardView>View 1</CardView>
                    <CardView>View 2</CardView>
                    <CardOverlay>
                      <p>This card shows the population statistics for Burundi. It is possible to view the aggregated numbers, as well as gender specific statistics.</p>
                      <p>The data comes from this source: <br /> <a href="#">source of the data</a></p>
                    </CardOverlay>
                  </Card>
                </div>

                <div className="col sm-12 lg-8 px1 pb2">
                  <Card>
                    <CardView>View 0</CardView>
                    <CardView>View 1</CardView>
                    <CardView>View 2</CardView>
                    <CardOverlay>
                      <p>This card shows the population statistics for Burundi. It is possible to view the aggregated numbers, as well as gender specific statistics.</p>
                      <p>The data comes from this source: <br /> <a href="#">source of the data</a></p>
                    </CardOverlay>
                  </Card>
                </div>

                <div className="col sm-6 lg-4 px1 pb2">
                  <Card>
                    <CardView>View 0</CardView>
                    <CardView>View 1</CardView>
                    <CardView>View 2</CardView>
                    <CardOverlay>
                      <p>This card shows the population statistics for Burundi. It is possible to view the aggregated numbers, as well as gender specific statistics.</p>
                      <p>The data comes from this source: <br /> <a href="#">source of the data</a></p>
                    </CardOverlay>
                  </Card>
                </div>

                <div className="col sm-6 lg-4 px1 pb2">
                  <Card>
                    <CardView>View 0</CardView>
                    <CardView>View 1</CardView>
                    <CardView>View 2</CardView>
                    <CardOverlay>
                      <p>This card shows the population statistics for Burundi. It is possible to view the aggregated numbers, as well as gender specific statistics.</p>
                      <p>The data comes from this source: <br /> <a href="#">source of the data</a></p>
                    </CardOverlay>
                  </Card>
                </div>

                <div className="col sm-12 lg-8 px1 pb2">
                  <Card>
                    <CardView>View 0</CardView>
                    <CardView>View 1</CardView>
                    <CardView>View 2</CardView>
                    <CardOverlay>
                      <p>This card shows the population statistics for Burundi. It is possible to view the aggregated numbers, as well as gender specific statistics.</p>
                      <p>The data comes from this source: <br /> <a href="#">source of the data</a></p>
                    </CardOverlay>
                  </Card>
                </div>

                <div className="col sm-6 lg-4 px1 pb2">
                  <Card>
                    <CardView>View 0</CardView>
                    <CardView>View 1</CardView>
                    <CardView>View 2</CardView>
                    <CardOverlay>
                      <p>This card shows the population statistics for Burundi. It is possible to view the aggregated numbers, as well as gender specific statistics.</p>
                      <p>The data comes from this source: <br /> <a href="#">source of the data</a></p>
                    </CardOverlay>
                  </Card>
                </div>

                <div className="col sm-6 lg-4 px1 pb2">
                  <Card>
                    <CardView>View 0</CardView>
                    <CardView>View 1</CardView>
                    <CardView>View 2</CardView>
                    <CardOverlay>
                      <p>This card shows the population statistics for Burundi. It is possible to view the aggregated numbers, as well as gender specific statistics.</p>
                      <p>The data comes from this source: <br /> <a href="#">source of the data</a></p>
                    </CardOverlay>
                  </Card>
                </div>

                <div className="col sm-6 lg-4 px1 pb2">
                  <Card>
                    <CardView>View 0</CardView>
                    <CardView>View 1</CardView>
                    <CardView>View 2</CardView>
                    <CardOverlay>
                      <p>This card shows the population statistics for Burundi. It is possible to view the aggregated numbers, as well as gender specific statistics.</p>
                      <p>The data comes from this source: <br /> <a href="#">source of the data</a></p>
                    </CardOverlay>
                  </Card>
                </div>

                <div className="col sm-12 px1 pb2">
                  <hr />
                </div>

                <div className="col sm-12 px1 pb2">
                  <Card>
                    <CardView>View 0</CardView>
                    <CardView>View 1</CardView>
                    <CardView>View 2</CardView>
                    <CardOverlay>
                      <p>This card shows the population statistics for Burundi. It is possible to view the aggregated numbers, as well as gender specific statistics.</p>
                      <p>The data comes from this source: <br /> <a href="#">source of the data</a></p>
                    </CardOverlay>
                  </Card>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}


Society.propTypes = {
  params: React.PropTypes.object.isRequired,
}

Society.contextTypes = {
  i18n: React.PropTypes.object.isRequired,
}

export default Society
