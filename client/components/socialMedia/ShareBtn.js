
import React from "react"

const BrandColors = {
  twitter: "#1da1f2",
  facebook: "#3b5998",
  mail: "#F6F4F2",
}

class ShareBtn extends React.Component {
  render() {

    const icons = {
      twitter: (
        <svg className="block" width="20px" height="20px" viewBox="0 0 24 24">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g fill="#ffffff">
                    <path d="M18.3671875,8.734375 L18.3671875,9.1640625 C18.3671875,9.89323281 18.2747405,10.6262984 18.0898438,11.3632812 C17.904947,12.1002641 17.6393246,12.8164028 17.2929688,13.5117188 C16.9466129,14.2070347 16.5026069,14.8567678 15.9609375,15.4609375 C15.4192681,16.0651072 14.8125034,16.5924457 14.140625,17.0429688 C13.4687466,17.4934918 12.6940148,17.848957 11.8164062,18.109375 C10.9387977,18.369793 10.0130257,18.5 9.0390625,18.5 C7.0650943,18.5 5.38542359,18.054692 4,17.1640625 C4.23958453,17.200521 4.49999859,17.21875 4.78125,17.21875 C5.51042031,17.21875 6.22395484,17.0781264 6.921875,16.796875 C7.61979516,16.5156236 8.26301789,16.1380232 8.8515625,15.6640625 C8.14843398,15.6588541 7.51432574,15.4414084 6.94921875,15.0117188 C6.38411176,14.5820291 6.00000102,14.0390658 5.796875,13.3828125 C6.01562609,13.4244794 6.21874906,13.4453125 6.40625,13.4453125 C6.70833484,13.4453125 6.99999859,13.4062504 7.28125,13.328125 C6.52603789,13.1770826 5.89844,12.8007843 5.3984375,12.1992188 C4.898435,11.5976532 4.6484375,10.9010456 4.6484375,10.109375 L4.6484375,10.0703125 C5.11718984,10.3255221 5.61197656,10.4609374 6.1328125,10.4765625 C5.67968523,10.1744777 5.3216159,9.78385656 5.05859375,9.3046875 C4.7955716,8.82551844 4.6640625,8.30989859 4.6640625,7.7578125 C4.6640625,7.22135148 4.81249852,6.6901068 5.109375,6.1640625 C5.93229578,7.1640675 6.9270775,7.95702832 8.09375,8.54296875 C9.2604225,9.12890918 10.5182224,9.45833297 11.8671875,9.53125 C11.8203123,9.32812398 11.796875,9.07552234 11.796875,8.7734375 C11.796875,7.86718297 12.1158822,7.09505527 12.7539062,6.45703125 C13.3919303,5.81900723 14.164058,5.5 15.0703125,5.5 C16.0026088,5.5 16.8072883,5.84374656 17.484375,6.53125 C18.2291704,6.38020758 18.9192677,6.11458523 19.5546875,5.734375 C19.3046862,6.52604563 18.8229202,7.13281039 18.109375,7.5546875 C18.7604199,7.48177047 19.390622,7.30729305 20,7.03125 C19.5624978,7.69271164 19.0182324,8.2604143 18.3671875,8.734375 Z"></path>
                </g>
            </g>
        </svg>
      ),
      facebook: (
        <svg className="block" width="20px" height="20px" viewBox="0 0 24 24">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g fill="#ffffff">
                    <path d="M20,5 L20,19 C20,19.2708347 19.9010427,19.5052073 19.703125,19.703125 C19.5052073,19.9010427 19.2708347,20 19,20 L15,20 L15,13.78125 L17,13.78125 L17.3359375,11.4765625 L15,11.4765625 L15,9.6640625 C15,9.3307275 15.0846346,9.07552172 15.2539062,8.8984375 C15.4231779,8.72135328 15.6718734,8.6328125 16,8.6328125 L17.5,8.6328125 L17.5,6.5546875 C17.0520811,6.48177047 16.5052116,6.4453125 15.859375,6.4453125 C14.786453,6.4453125 13.9674507,6.7174452 13.4023438,7.26171875 C12.8372368,7.8059923 12.5546875,8.54687031 12.5546875,9.484375 L12.5546875,11.4765625 L10.5546875,11.4765625 L10.5546875,13.78125 L12.5546875,13.78125 L12.5546875,20 L5,20 C4.72916531,20 4.49479266,19.9010427 4.296875,19.703125 C4.09895734,19.5052073 4,19.2708347 4,19 L4,5 C4,4.72916531 4.09895734,4.49479266 4.296875,4.296875 C4.49479266,4.09895734 4.72916531,4 5,4 L19,4 C19.2708347,4 19.5052073,4.09895734 19.703125,4.296875 C19.9010427,4.49479266 20,4.72916531 20,5 L20,5 Z"></path>
                </g>
            </g>
        </svg>
      ),
      mail: (
        <svg className="block" width="20px" height="20px" viewBox="0 0 24 24">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g strokeWidth="2" stroke="#343434">
                    <g transform="translate(3, 5)">
                        <polyline points="0 4.091 0 14 18 14 18 4.091"></polyline>
                        <polygon points="18 4.091 18 0 0 0 0 4.091 9 9"></polygon>
                    </g>
                </g>
            </g>
        </svg>
      )
    }

    return (
      <button className="btn" style={{ background: BrandColors[this.props.service] }}>
        { icons[this.props.service] }
      </button>
    )
  }
}

export default ShareBtn