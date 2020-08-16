import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dev-logo',
  template: `
    <svg width="205" height="48" viewBox="0 0 486 116" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="58" cy="58" r="58" fill="white" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M37.113 63.5622L23.4937 68.698L58.0215 87.0355L58.0677 74.8062L37.113 63.5622Z" fill="black" />
      <path d="M58.0215 52.598V41.1139L23.4937 58.4806L37.113 63.5622L58.0215 52.598Z" fill="#BFBFBF" />
      <path d="M23.4937 58.4806V68.6979L37.113 63.5622L23.4937 58.4806Z" fill="#7F7F7F" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M78.9548 51.8154L92.5741 56.9511L58.0463 75.2887L58 63.0594L78.9548 51.8154Z" fill="black" />
      <path d="M58.0463 40.8512V29.3671L92.5741 46.7338L78.9548 51.8154L58.0463 40.8512Z" fill="#BFBFBF" />
      <path d="M92.5741 46.7338V56.9512L78.9548 51.8154L92.5741 46.7338Z" fill="#7F7F7F" />
      <path
        d="M136 81.84H145.253V68.515H151.835C168.126 68.515 168.973 60.13 168.973 54.475C168.973 48.755 167.605 40.24 151.313 40.24H136V81.84ZM145.253 61.17V47.91H151.705C158.547 47.91 159.525 51.81 159.525 54.605C159.525 57.465 158.548 61.17 151.705 61.17H145.253ZM185.395 82.36C192.172 82.36 196.082 79.56 198.037 76.51L200.057 81.84H203.837V62.99C203.837 54.15 201.882 48.04 188.002 48.04C176.012 48.04 173.21 53.565 173.21 60.39L182.072 60.325C182.072 57.075 183.44 54.925 188.197 54.925C193.15 54.925 194.844 57.59 194.909 61.295L186.047 62.075C176.272 62.92 172.102 65.65 172.102 71.955C172.101 79.11 177.966 82.36 185.395 82.36ZM187.545 75.405C183.179 75.405 181.42 73.78 181.42 71.505C181.42 69.75 182.788 68.58 187.42 68.125L194.914 67.28C194.844 71.64 193.084 75.405 187.545 75.405V75.405ZM229.707 82.165V74.885C223.451 75.34 221.366 74.43 221.366 70.725V55.84H229.707V48.56H221.107V40.24H212.243V48.69L207.355 51.42V55.84H212.242V70.79C212.243 81.06 217.847 83.14 229.707 82.165ZM234.529 81.84H243.457V64.225C243.457 59.545 244.757 55.32 252.515 56.165V48.165C245.933 47.515 242.545 50.505 240.329 53.82L238.244 48.555H234.53L234.529 81.84ZM260.856 43.165C264.179 43.165 266.456 42.255 266.456 38.615C266.456 34.91 264.175 34 260.856 34C257.537 34 255.122 34.91 255.122 38.615C255.121 42.255 257.402 43.165 260.856 43.165ZM256.359 81.84H265.352V48.56H256.359V81.84ZM287.377 82.36C297.934 82.36 302.756 76.96 302.756 68.84L293.568 68.775C293.047 72.415 291.418 74.755 287.052 74.755C281.187 74.755 279.167 70.725 279.167 65.135C279.167 59.415 281.252 55.45 287.052 55.45C291.418 55.45 293.052 57.725 293.568 61.82H302.756C302.756 53.63 297.738 48.04 287.182 48.04C273.954 48.04 270.369 56.36 270.369 65.265C270.369 74.17 273.823 82.36 287.378 82.36H287.377ZM308.23 81.84H317.158V67.865L328.432 81.84H340.422L324.131 64.29L339.575 48.56H327.515L317.158 60.715V35.885H308.23V81.84ZM359.715 81.84H383.174V74.17H369.029L369.04 68.383L369.094 40.24H359.715V81.84ZM391.45 43.165C394.773 43.165 397.05 42.255 397.05 38.615C397.05 34.91 394.769 34 391.45 34C388.131 34 385.716 34.91 385.716 38.615C385.715 42.255 387.992 43.165 391.446 43.165H391.45ZM386.95 81.84H395.943V48.56H386.95V81.84ZM402.65 81.84H411.578V61.56C411.578 58.31 412.555 55.58 416.726 55.58C420.897 55.58 421.615 58.24 421.615 61.43V81.84H430.673V61.43C430.673 58.18 431.585 55.58 435.691 55.58C439.862 55.58 440.578 58.245 440.578 61.43V81.84H449.636V62.015C449.636 54.605 447.681 48.04 438.558 48.04C432.433 48.04 429.758 50.965 428.653 52.98C426.894 49.73 423.831 48.04 419.4 48.04C413.079 48.04 409.886 51.29 408.517 54.02L406.497 48.56H402.652L402.65 81.84ZM467.55 82.36C474.327 82.36 478.237 79.56 480.192 76.51L482.22 81.84H486V62.99C486 54.15 484.045 48.04 470.165 48.04C458.175 48.04 455.373 53.565 455.373 60.39L464.235 60.325C464.235 57.075 465.603 54.925 470.36 54.925C475.313 54.925 477.007 57.59 477.072 61.295L468.21 62.075C458.435 62.92 454.265 65.65 454.265 71.955C454.265 79.11 460.13 82.36 467.558 82.36H467.55ZM469.7 75.405C465.334 75.405 463.575 73.78 463.575 71.505C463.575 69.75 464.943 68.58 469.575 68.125L477.069 67.28C477.007 71.64 475.248 75.405 469.709 75.405H469.7Z"
        fill="var(--primary)"
      />
    </svg>
  `,
})
export class LogoComponent implements OnInit {
  @Input() onlyIcon = false;

  constructor() {}

  ngOnInit() {}
}
