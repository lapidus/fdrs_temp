import React from "react"

const StaffGenderDistribution = ({ translations }) =>
  <div>
    <svg width="100%" height="274px" viewBox="0 0 600 274">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" fontFamily="Roboto-Regular, Roboto">
        <text fontSize="13" fontWeight="normal" letterSpacing="1" fill="#786A65">
          <tspan x="36.7964313" y="72">{ translations.male }</tspan>
        </text>
        <text fontSize="13" fontWeight="normal" letterSpacing="1" fill="#786A65">
          <tspan x="508.509322" y="72">{ translations.female }</tspan>
        </text>
        <path d="M48.1925926,122.851852 C41.5851852,122.851852 36,128.782716 36,135.745679 L36,167.987654 C36,168.683951 36.2617284,169.271605 36.7209877,169.765432 L40.9382716,173.962963 L40.9931164,204.483012 C40.9931164,205.870666 42.0992892,206.952148 43.4622522,206.952148 L68.1536102,206.952148 C69.5215115,206.952148 70.622746,205.870666 70.622746,204.483012 L70.5679012,173.962963 L74.7802469,169.765432 C75.2444444,169.271605 75.5061728,168.683951 75.5061728,167.987654 L75.5061728,135.745679 C75.5061728,128.782716 69.9259259,122.851852 63.3135802,122.851852 L48.1925926,122.851852 Z M55.7530864,121.074074 C63.9209877,121.074074 70.5679012,114.45679 70.5679012,106.259259 C70.5679012,98.1111111 63.9209877,91.4444444 55.7530864,91.4444444 C47.5851852,91.4444444 40.9382716,98.1111111 40.9382716,106.259259 C40.9382716,114.45679 47.5851852,121.074074 55.7530864,121.074074 Z" fill="#D6D2D0" />
        <path d="M560.577577,183.569083 L556.216494,158.2925 L556.216494,136.024917 C556.216494,129.185833 550.355827,123.1875 543.674077,123.1875 L528.619244,123.1875 C522.143994,123.1875 516.88316,128.944917 516.88316,136.024917 L516.88316,158.046667 L511.38141,184.154167 C511.224077,184.891667 511.41091,185.629167 511.877994,186.219167 C512.345077,186.764917 513.04816,187.104167 513.790577,187.104167 L521.799827,187.104167 L521.799827,204.3125 C521.799827,205.694083 522.90116,206.770833 524.25816,206.770833 L548.841494,206.770833 C550.20341,206.770833 551.299827,205.694083 551.299827,204.3125 L551.299827,187.104167 L558.266744,187.104167 L558.320827,187.104167 C559.692577,187.153333 560.82341,186.027417 560.82341,184.645833 C560.82341,184.257417 560.739827,183.908333 560.577577,183.569083 Z M536.141744,121.4175 C544.278827,121.4175 550.891744,114.829167 550.891744,106.6675 C550.891744,98.555 544.278827,91.9175 536.141744,91.9175 C528.009577,91.9175 521.391744,98.555 521.391744,106.6675 C521.391744,114.829167 528.009577,121.4175 536.141744,121.4175 Z" fill="#D6D2D0" />

        <g transform="translate(143.960494, 90)">
          <text x="150" y="0" fontSize="13" fontWeight="normal" fill="#786A65" textAnchor="middle">
            { translations.nationalSocietyStaff }
          </text>
          <rect fill="#786A65" x="62" y="9" width="80" height="10" />
          <rect fill="#EE3224" x="162" y="9" width="119" height="10" />
          <text fontSize="20" fontWeight="normal" fill="#786A65">
            <tspan x="289" y="21">{ "59.7%" }</tspan>
          </text>
          <text fontSize="20" fontWeight="normal" fill="#786A65">
            <tspan x="0.396484375" y="21">{ "40.3%" }</tspan>
          </text>
        </g>

        <g transform="translate(120.960494, 140)">
          <text x="170" y="0" fontSize="13" fontWeight="normal" fill="#786A65" textAnchor="middle">
            { translations.nationalSocietyVolunteers }
          </text>
          <rect fill="#786A65" x="185" y="9" width="96" height="10" />
          <rect fill="#EE3224" x="62" y="9" width="103" height="10" />
          <text fontSize="20" fontWeight="normal" fill="#786A65">
            <tspan x="289" y="21">{ "48.3%" }</tspan>
          </text>
          <text fontSize="20" fontWeight="normal" fill="#786A65">
            <tspan x="0.396484375" y="21">{ "51.7%" }</tspan>
          </text>
        </g>

        <g transform="translate(99.960494, 190)">
          <text x="190" y="0" fontSize="13" fontWeight="normal" fill="#786A65" textAnchor="middle">
            { translations.IFRCSecretariatStaff }
          </text>
          <rect fill="#EE3224" x="62" y="9" width="124" height="10" />
          <rect fill="#786A65" x="206" y="9" width="76" height="10" />
          <text fontSize="20" fontWeight="normal" fill="#786A65">
            <tspan x="290" y="21">{ "38.1%" }</tspan>
          </text>
          <text fontSize="20" fontWeight="normal" fill="#786A65">
            <tspan x="0.40625" y="21">{ "61.9%" }</tspan>
          </text>
        </g>
      </g>
    </svg>
  </div>

StaffGenderDistribution.propTypes = {
  translations: React.PropTypes.object,
}

export default StaffGenderDistribution
