import { Button } from "@repo/ui/components/ui/button";
import { Input } from "@repo/ui/components/ui/input";
import { Card, CardContent } from "@repo/ui/components/ui/card";
import {
  Edit2,
  Facebook, Grid2x2, HandshakeIcon, Linkedin,
  LogOut, PanelsTopLeft, PencilRuler, School, Search,
  TvMinimalPlay, X,
} from "lucide-react";
import card1 from './assets/card/card1.png'
import card2 from './assets/card/card2.png'
import card3 from './assets/card/card3.png'
import card4 from './assets/card/card4.png'
import card5 from './assets/card/card5.png'
import card6 from './assets/card/card6.png'

function App() {
  return (
    <>
      <div className="min-h-screen bg-[#191153] text-white">
        <header className="absolute left-[310px] top-[25px] right-[25px] max-w-[calc(100%-310px)] h-[79px] bg-white/10 border border-white/20 flex items-center px-6 rounded-[15px]">
          <nav className="flex items-center gap-6">
            {[
              "Plans & Pricing",
              "Account",
              "Team",
              "Faq",
              "Contact Us",
              "Affiliate",
              "Api",
              "Reseller",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-white hover:text-white/70"
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="ml-auto">
            <Button variant="ghost" size="icon" className="hover:bg-[#191153]">
              <svg
                width="51"
                height="35"
                viewBox="0 0 51 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.46774 0C1.10486 0 0 1.23712 0 2.76316C0 4.28919 1.10486 5.52632 2.46774 5.52632V0ZM48.5323 5.52632C49.8951 5.52632 51 4.28919 51 2.76316C51 1.23712 49.8951 0 48.5323 0V5.52632ZM2.46774 14.7368C1.10486 14.7368 0 15.974 0 17.5C0 19.026 1.10486 20.2632 2.46774 20.2632V14.7368ZM41.9516 20.2632C43.3145 20.2632 44.4194 19.026 44.4194 17.5C44.4194 15.974 43.3145 14.7368 41.9516 14.7368V20.2632ZM2.46774 29.4737C1.10486 29.4737 0 30.7108 0 32.2368C0 33.7628 1.10486 35 2.46774 35V29.4737ZM25.5 35C26.8629 35 27.9677 33.7628 27.9677 32.2368C27.9677 30.7108 26.8629 29.4737 25.5 29.4737V35ZM2.46774 5.52632H48.5323V0H2.46774V5.52632ZM2.46774 20.2632H41.9516V14.7368H2.46774V20.2632ZM2.46774 35H25.5V29.4737H2.46774V35Z"
                  fill="white"
                />
              </svg>
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </div>
        </header>
        <div className="flex">
          <aside className="fixed left-[25px] top-[25px] w-[260px] h-[2374px] bg-white/10 rounded-[20px] border-t border-white/10">
            <div className="p-4 mb-4">
              <svg
                width="232"
                height="22"
                viewBox="0 0 242 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.41356 17.322C3.56056 17.322 0.0415625 13.688 0.0415625 8.95C0.0415625 4.212 3.56056 0.577999 8.41356 0.577999C11.3346 0.577999 13.9106 2.027 15.3136 4.304L12.1396 6.144C11.4266 4.902 10.0466 4.166 8.41356 4.166C5.56156 4.166 3.72156 6.075 3.72156 8.95C3.72156 11.825 5.56156 13.734 8.41356 13.734C10.0466 13.734 11.4496 12.998 12.1396 11.756L15.3136 13.596C13.9336 15.873 11.3576 17.322 8.41356 17.322ZM22.5555 17.322C19.1745 17.322 16.4605 14.677 16.4605 11.25C16.4605 7.823 19.1745 5.178 22.5555 5.178C25.9365 5.178 28.6505 7.823 28.6505 11.25C28.6505 14.677 25.9365 17.322 22.5555 17.322ZM22.5555 13.964C24.0505 13.964 25.2005 12.883 25.2005 11.25C25.2005 9.617 24.0505 8.536 22.5555 8.536C21.0605 8.536 19.9105 9.617 19.9105 11.25C19.9105 12.883 21.0605 13.964 22.5555 13.964ZM37.3409 5.178C39.6639 5.178 41.6419 6.834 41.6419 9.939V17H38.1919V10.445C38.1919 9.019 37.2949 8.352 36.1909 8.352C34.9259 8.352 34.0519 9.088 34.0519 10.721V17H30.6019V5.5H34.0519V6.581C34.6729 5.73 35.8229 5.178 37.3409 5.178ZM50.7501 5.178C53.0731 5.178 55.0511 6.834 55.0511 9.939V17H51.6011V10.445C51.6011 9.019 50.7041 8.352 49.6001 8.352C48.3351 8.352 47.4611 9.088 47.4611 10.721V17H44.0111V5.5H47.4611V6.581C48.0821 5.73 49.2321 5.178 50.7501 5.178ZM60.5023 12.63C60.9393 13.826 61.9973 14.24 63.2623 14.24C64.2053 14.24 65.0103 13.872 65.4703 13.366L68.2303 14.953C67.1033 16.517 65.4013 17.322 63.2163 17.322C59.2833 17.322 56.8453 14.677 56.8453 11.25C56.8453 7.823 59.3293 5.178 62.9633 5.178C66.3213 5.178 68.8053 7.777 68.8053 11.25C68.8053 11.733 68.7593 12.193 68.6673 12.63H60.5023ZM60.4333 10.054H65.3783C65.0103 8.72 63.9753 8.237 62.9403 8.237C61.6293 8.237 60.7553 8.881 60.4333 10.054ZM76.1698 17.322C72.6738 17.322 70.0748 14.677 70.0748 11.25C70.0748 7.823 72.6738 5.178 76.1698 5.178C78.4008 5.178 80.3788 6.351 81.3678 8.122L78.3548 9.87C77.9638 9.065 77.1358 8.582 76.1238 8.582C74.6288 8.582 73.5248 9.663 73.5248 11.25C73.5248 12.837 74.6288 13.918 76.1238 13.918C77.1358 13.918 77.9868 13.435 78.3548 12.63L81.3678 14.355C80.3788 16.149 78.4238 17.322 76.1698 17.322ZM89.4952 8.812H87.1262V12.883C87.1262 13.872 87.9772 13.964 89.4952 13.872V17C84.9872 17.46 83.6762 16.103 83.6762 12.883V8.812H81.8362V5.5H83.6762V3.315L87.1262 2.28V5.5H89.4952V8.812Z"
                  fill="#FFA51F"
                />
                <path
                  d="M97.1986 17.322C93.8176 17.322 91.6556 15.712 90.7586 13.343L93.9326 11.503C94.5076 12.837 95.4966 13.734 97.3136 13.734C99.0616 13.734 99.4986 13.044 99.4986 12.423C99.4986 11.434 98.5786 11.043 96.1636 10.376C93.7716 9.709 91.4256 8.559 91.4256 5.477C91.4256 2.372 94.0476 0.577999 96.8306 0.577999C99.4756 0.577999 101.546 1.843 102.719 4.212L99.6136 6.029C99.0616 4.879 98.3026 4.166 96.8306 4.166C95.6806 4.166 95.1056 4.741 95.1056 5.385C95.1056 6.121 95.4966 6.627 98.0036 7.386C100.442 8.122 103.179 8.973 103.179 12.377C103.179 15.482 100.695 17.322 97.1986 17.322ZM111.78 5.178C114.793 5.178 117.277 7.823 117.277 11.25C117.277 14.677 114.793 17.322 111.78 17.322C110.239 17.322 109.112 16.793 108.353 15.919V21.6H104.903V5.5H108.353V6.581C109.112 5.707 110.239 5.178 111.78 5.178ZM111.09 14.056C112.677 14.056 113.827 12.975 113.827 11.25C113.827 9.525 112.677 8.444 111.09 8.444C109.503 8.444 108.353 9.525 108.353 11.25C108.353 12.975 109.503 14.056 111.09 14.056ZM124.753 17.322C121.372 17.322 118.658 14.677 118.658 11.25C118.658 7.823 121.372 5.178 124.753 5.178C128.134 5.178 130.848 7.823 130.848 11.25C130.848 14.677 128.134 17.322 124.753 17.322ZM124.753 13.964C126.248 13.964 127.398 12.883 127.398 11.25C127.398 9.617 126.248 8.536 124.753 8.536C123.258 8.536 122.108 9.617 122.108 11.25C122.108 12.883 123.258 13.964 124.753 13.964ZM139.538 5.178C141.861 5.178 143.839 6.834 143.839 9.939V17H140.389V10.445C140.389 9.019 139.492 8.352 138.388 8.352C137.123 8.352 136.249 9.088 136.249 10.721V17H132.799V5.5H136.249V6.581C136.87 5.73 138.02 5.178 139.538 5.178ZM149.474 8.858C149.474 10.169 155.132 9.295 155.132 13.55C155.132 16.195 152.832 17.322 150.348 17.322C148.048 17.322 146.3 16.448 145.403 14.585L148.393 12.883C148.692 13.757 149.336 14.24 150.348 14.24C151.176 14.24 151.59 13.987 151.59 13.527C151.59 12.262 145.932 12.929 145.932 8.95C145.932 6.443 148.048 5.178 150.44 5.178C152.303 5.178 153.959 6.006 154.925 7.639L151.981 9.226C151.659 8.628 151.199 8.214 150.44 8.214C149.842 8.214 149.474 8.444 149.474 8.858ZM162.263 17.322C158.882 17.322 156.168 14.677 156.168 11.25C156.168 7.823 158.882 5.178 162.263 5.178C165.644 5.178 168.358 7.823 168.358 11.25C168.358 14.677 165.644 17.322 162.263 17.322ZM162.263 13.964C163.758 13.964 164.908 12.883 164.908 11.25C164.908 9.617 163.758 8.536 162.263 8.536C160.768 8.536 159.618 9.617 159.618 11.25C159.618 12.883 160.768 13.964 162.263 13.964ZM173.759 7.547C174.219 6.006 175.76 5.27 177.209 5.27V9.18C175.783 8.95 173.759 9.525 173.759 11.802V17H170.309V5.5H173.759V7.547ZM181.751 8.858C181.751 10.169 187.409 9.295 187.409 13.55C187.409 16.195 185.109 17.322 182.625 17.322C180.325 17.322 178.577 16.448 177.68 14.585L180.67 12.883C180.969 13.757 181.613 14.24 182.625 14.24C183.453 14.24 183.867 13.987 183.867 13.527C183.867 12.262 178.209 12.929 178.209 8.95C178.209 6.443 180.325 5.178 182.717 5.178C184.58 5.178 186.236 6.006 187.202 7.639L184.258 9.226C183.936 8.628 183.476 8.214 182.717 8.214C182.119 8.214 181.751 8.444 181.751 8.858ZM190.974 17.322C189.778 17.322 188.789 16.333 188.789 15.137C188.789 13.941 189.778 12.952 190.974 12.952C192.17 12.952 193.159 13.941 193.159 15.137C193.159 16.333 192.17 17.322 190.974 17.322ZM202.117 17.322C197.264 17.322 193.745 13.688 193.745 8.95C193.745 4.212 197.264 0.577999 202.117 0.577999C205.038 0.577999 207.614 2.027 209.017 4.304L205.843 6.144C205.13 4.902 203.75 4.166 202.117 4.166C199.265 4.166 197.425 6.075 197.425 8.95C197.425 11.825 199.265 13.734 202.117 13.734C203.75 13.734 205.153 12.998 205.843 11.756L209.017 13.596C207.637 15.873 205.061 17.322 202.117 17.322ZM216.259 17.322C212.878 17.322 210.164 14.677 210.164 11.25C210.164 7.823 212.878 5.178 216.259 5.178C219.64 5.178 222.354 7.823 222.354 11.25C222.354 14.677 219.64 17.322 216.259 17.322ZM216.259 13.964C217.754 13.964 218.904 12.883 218.904 11.25C218.904 9.617 217.754 8.536 216.259 8.536C214.764 8.536 213.614 9.617 213.614 11.25C213.614 12.883 214.764 13.964 216.259 13.964ZM237.185 5.178C239.83 5.178 241.555 7.064 241.555 9.939V17H238.105V10.238C238.105 9.088 237.553 8.352 236.449 8.352C235.299 8.352 234.655 9.157 234.655 10.514V17H231.205V10.238C231.205 9.088 230.653 8.352 229.549 8.352C228.399 8.352 227.755 9.157 227.755 10.514V17H224.305V5.5H227.755V6.558C228.284 5.776 229.296 5.178 230.837 5.178C232.194 5.178 233.206 5.73 233.85 6.696C234.494 5.776 235.552 5.178 237.185 5.178Z"
                  fill="white"
                />
              </svg>
            </div>
            <nav className="flex flex-col h-full px-4">
              {[
                { title: "Dashboard", icon: PanelsTopLeft, isActive: true },
                { title: "Startup Plan", icon: Search },
                { title: "Pro Plan", icon: HandshakeIcon },
                { title: "Featured Sponsorship Opportunities", icon: School },
                { title: "Featured Content Entrepreneurs", icon: Grid2x2 },
                { title: "Partner apps, tools & courses", icon: PencilRuler },
                { title: "Suggest Youtube Channel", icon: TvMinimalPlay },
              ].map((item, index) => (
                <Button
                  key={item.title}
                  variant="ghost"
                  className={`justify-start items-center mb-2 text-sm hover:bg-[#E9901A] hover:text-white break-keep  ${
                    item.isActive
                      ? "bg-[#E9901A] text-white w-[239px] h-[50px] rounded-[12px]"
                      : "text-white/70 hover:text-white"
                  }`}
                  style={item.isActive ? { marginLeft: "-10px" } : {}}
                >
                  <div
                    className={`w-[34px] h-[34px] rounded-[8px] flex justify-center items-center mr-2 ${
                      item.isActive ? "bg-white text-[#E9901A]" : ""
                    }`}
                  >
                    <item.icon className={`h-4 w-4 flex-shrink-0`} />
                  </div>
                  <span className="truncate">{item.title}</span>
                </Button>
              ))}
              <div className="mt-auto">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-white/70 hover:text-white"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </Button>
              </div>
            </nav>
          </aside>
          <main className="ml-[285px] flex-1 p-6 pt-[130px] max-w-[calc(100%-285px)]">
            <h2 className="text-2xl font-bold mb-4">
              Download the 1,000+ most active YouTube sponsors in 30 languages
            </h2>
            <Card
              className="rounded-[15px]"
              style={{
                background:
                  "linear-gradient(270.1deg," +
                  " #191153" +
                  " 0.77%, rgba(56, 38, 185, 0.42) 99.92%)",
              }}
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-[#FFA51F]">
                      Download Sponsors
                    </h3>
                    <div className="font-medium text-[#FFA51F]">Date</div>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-white/5 p-4">
                    <div className="flex items-center gap-4">
                      <p className="text-sm text-white/70">Google Documents</p>
                    </div>
                    <div className="text-sm text-white/70">24/10/2024</div>
                  </div>
                  <p className="text-sm text-white">
                    This content is for Pro plan & Enterprise members only
                  </p>
                  <div className="text-white">
                    Please
                    <Button
                      variant="link"
                      className="px-1 text-[#FFA51F] underline"
                    >
                      Click Here
                    </Button>
                    to gain access
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="space-y-4 flex flex-col items-center mt-6">
              <h2 className="mb-6 text-2xl font-bold text-center">
                Give <span className="text-[#E9901A]">ConnectSponsors</span> to
                your friends!
              </h2>
              <Card
                className="text-white w-[534px] h-[641px] rounded-[15px] border-white/70"
                style={{
                  background:
                    "linear-gradient(270.1deg," +
                    " #191153" +
                    " 0.77%, rgba(56, 38, 185, 0.42) 99.92%)",
                }}
              >
                <CardContent className="p-8 space-y-6">
                  <div className="space-y-4 text-center">
                    <div className="flex justify-center">
                      <svg
                        width="347"
                        height="31"
                        viewBox="0 0 347 31"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.4629 24.462C5.49994 24.462 0.450938 19.248 0.450938 12.45C0.450938 5.652 5.49994 0.437998 12.4629 0.437998C16.6539 0.437998 20.3499 2.517 22.3629 5.784L17.8089 8.424C16.7859 6.642 14.8059 5.586 12.4629 5.586C8.37094 5.586 5.73094 8.325 5.73094 12.45C5.73094 16.575 8.37094 19.314 12.4629 19.314C14.8059 19.314 16.8189 18.258 17.8089 16.476L22.3629 19.116C20.3829 22.383 16.6869 24.462 12.4629 24.462ZM32.7536 24.462C27.9026 24.462 24.0086 20.667 24.0086 15.75C24.0086 10.833 27.9026 7.038 32.7536 7.038C37.6046 7.038 41.4986 10.833 41.4986 15.75C41.4986 20.667 37.6046 24.462 32.7536 24.462ZM32.7536 19.644C34.8986 19.644 36.5486 18.093 36.5486 15.75C36.5486 13.407 34.8986 11.856 32.7536 11.856C30.6086 11.856 28.9586 13.407 28.9586 15.75C28.9586 18.093 30.6086 19.644 32.7536 19.644ZM53.9674 7.038C57.3004 7.038 60.1384 9.414 60.1384 13.869V24H55.1884V14.595C55.1884 12.549 53.9014 11.592 52.3174 11.592C50.5024 11.592 49.2484 12.648 49.2484 14.991V24H44.2984V7.5H49.2484V9.051C50.1394 7.83 51.7894 7.038 53.9674 7.038ZM73.2067 7.038C76.5397 7.038 79.3777 9.414 79.3777 13.869V24H74.4277V14.595C74.4277 12.549 73.1407 11.592 71.5567 11.592C69.7417 11.592 68.4877 12.648 68.4877 14.991V24H63.5377V7.5H68.4877V9.051C69.3787 7.83 71.0287 7.038 73.2067 7.038ZM87.1989 17.73C87.8259 19.446 89.3439 20.04 91.1589 20.04C92.5119 20.04 93.6669 19.512 94.3269 18.786L98.2869 21.063C96.6699 23.307 94.2279 24.462 91.0929 24.462C85.4499 24.462 81.9519 20.667 81.9519 15.75C81.9519 10.833 85.5159 7.038 90.7299 7.038C95.5479 7.038 99.1119 10.767 99.1119 15.75C99.1119 16.443 99.0459 17.103 98.9139 17.73H87.1989ZM87.0999 14.034H94.1949C93.6669 12.12 92.1819 11.427 90.6969 11.427C88.8159 11.427 87.5619 12.351 87.0999 14.034ZM109.678 24.462C104.662 24.462 100.933 20.667 100.933 15.75C100.933 10.833 104.662 7.038 109.678 7.038C112.879 7.038 115.717 8.721 117.136 11.262L112.813 13.77C112.252 12.615 111.064 11.922 109.612 11.922C107.467 11.922 105.883 13.473 105.883 15.75C105.883 18.027 107.467 19.578 109.612 19.578C111.064 19.578 112.285 18.885 112.813 17.73L117.136 20.205C115.717 22.779 112.912 24.462 109.678 24.462ZM128.797 12.252H125.398V18.093C125.398 19.512 126.619 19.644 128.797 19.512V24C122.329 24.66 120.448 22.713 120.448 18.093V12.252H117.808V7.5H120.448V4.365L125.398 2.88V7.5H128.797V12.252Z"
                          fill="#FFA51F"
                        />
                        <path
                          d="M139.85 24.462C134.999 24.462 131.897 22.152 130.61 18.753L135.164 16.113C135.989 18.027 137.408 19.314 140.015 19.314C142.523 19.314 143.15 18.324 143.15 17.433C143.15 16.014 141.83 15.453 138.365 14.496C134.933 13.539 131.567 11.889 131.567 7.467C131.567 3.012 135.329 0.437998 139.322 0.437998C143.117 0.437998 146.087 2.253 147.77 5.652L143.315 8.259C142.523 6.609 141.434 5.586 139.322 5.586C137.672 5.586 136.847 6.411 136.847 7.335C136.847 8.391 137.408 9.117 141.005 10.206C144.503 11.262 148.43 12.483 148.43 17.367C148.43 21.822 144.866 24.462 139.85 24.462ZM160.771 7.038C165.094 7.038 168.658 10.833 168.658 15.75C168.658 20.667 165.094 24.462 160.771 24.462C158.56 24.462 156.943 23.703 155.854 22.449V30.6H150.904V7.5H155.854V9.051C156.943 7.797 158.56 7.038 160.771 7.038ZM159.781 19.776C162.058 19.776 163.708 18.225 163.708 15.75C163.708 13.275 162.058 11.724 159.781 11.724C157.504 11.724 155.854 13.275 155.854 15.75C155.854 18.225 157.504 19.776 159.781 19.776ZM179.384 24.462C174.533 24.462 170.639 20.667 170.639 15.75C170.639 10.833 174.533 7.038 179.384 7.038C184.235 7.038 188.129 10.833 188.129 15.75C188.129 20.667 184.235 24.462 179.384 24.462ZM179.384 19.644C181.529 19.644 183.179 18.093 183.179 15.75C183.179 13.407 181.529 11.856 179.384 11.856C177.239 11.856 175.589 13.407 175.589 15.75C175.589 18.093 177.239 19.644 179.384 19.644ZM200.598 7.038C203.931 7.038 206.769 9.414 206.769 13.869V24H201.819V14.595C201.819 12.549 200.532 11.592 198.948 11.592C197.133 11.592 195.879 12.648 195.879 14.991V24H190.929V7.5H195.879V9.051C196.77 7.83 198.42 7.038 200.598 7.038ZM214.855 12.318C214.855 14.199 222.973 12.945 222.973 19.05C222.973 22.845 219.673 24.462 216.109 24.462C212.809 24.462 210.301 23.208 209.014 20.535L213.304 18.093C213.733 19.347 214.657 20.04 216.109 20.04C217.297 20.04 217.891 19.677 217.891 19.017C217.891 17.202 209.773 18.159 209.773 12.45C209.773 8.853 212.809 7.038 216.241 7.038C218.914 7.038 221.29 8.226 222.676 10.569L218.452 12.846C217.99 11.988 217.33 11.394 216.241 11.394C215.383 11.394 214.855 11.724 214.855 12.318ZM233.203 24.462C228.352 24.462 224.458 20.667 224.458 15.75C224.458 10.833 228.352 7.038 233.203 7.038C238.054 7.038 241.948 10.833 241.948 15.75C241.948 20.667 238.054 24.462 233.203 24.462ZM233.203 19.644C235.348 19.644 236.998 18.093 236.998 15.75C236.998 13.407 235.348 11.856 233.203 11.856C231.058 11.856 229.408 13.407 229.408 15.75C229.408 18.093 231.058 19.644 233.203 19.644ZM249.698 10.437C250.358 8.226 252.569 7.17 254.648 7.17V12.78C252.602 12.45 249.698 13.275 249.698 16.542V24H244.748V7.5H249.698V10.437ZM261.164 12.318C261.164 14.199 269.282 12.945 269.282 19.05C269.282 22.845 265.982 24.462 262.418 24.462C259.118 24.462 256.61 23.208 255.323 20.535L259.613 18.093C260.042 19.347 260.966 20.04 262.418 20.04C263.606 20.04 264.2 19.677 264.2 19.017C264.2 17.202 256.082 18.159 256.082 12.45C256.082 8.853 259.118 7.038 262.55 7.038C265.223 7.038 267.599 8.226 268.985 10.569L264.761 12.846C264.299 11.988 263.639 11.394 262.55 11.394C261.692 11.394 261.164 11.724 261.164 12.318ZM274.397 24.462C272.681 24.462 271.262 23.043 271.262 21.327C271.262 19.611 272.681 18.192 274.397 18.192C276.113 18.192 277.532 19.611 277.532 21.327C277.532 23.043 276.113 24.462 274.397 24.462ZM290.385 24.462C283.422 24.462 278.373 19.248 278.373 12.45C278.373 5.652 283.422 0.437998 290.385 0.437998C294.576 0.437998 298.272 2.517 300.285 5.784L295.731 8.424C294.708 6.642 292.728 5.586 290.385 5.586C286.293 5.586 283.653 8.325 283.653 12.45C283.653 16.575 286.293 19.314 290.385 19.314C292.728 19.314 294.741 18.258 295.731 16.476L300.285 19.116C298.305 22.383 294.609 24.462 290.385 24.462ZM310.675 24.462C305.824 24.462 301.93 20.667 301.93 15.75C301.93 10.833 305.824 7.038 310.675 7.038C315.526 7.038 319.42 10.833 319.42 15.75C319.42 20.667 315.526 24.462 310.675 24.462ZM310.675 19.644C312.82 19.644 314.47 18.093 314.47 15.75C314.47 13.407 312.82 11.856 310.675 11.856C308.53 11.856 306.88 13.407 306.88 15.75C306.88 18.093 308.53 19.644 310.675 19.644ZM340.7 7.038C344.495 7.038 346.97 9.744 346.97 13.869V24H342.02V14.298C342.02 12.648 341.228 11.592 339.644 11.592C337.994 11.592 337.07 12.747 337.07 14.694V24H332.12V14.298C332.12 12.648 331.328 11.592 329.744 11.592C328.094 11.592 327.17 12.747 327.17 14.694V24H322.22V7.5H327.17V9.018C327.929 7.896 329.381 7.038 331.592 7.038C333.539 7.038 334.991 7.83 335.915 9.216C336.839 7.896 338.357 7.038 340.7 7.038Z"
                          fill="white"
                        />
                      </svg>
                    </div>

                    <h3 className="text-lg font-semibold">
                      Give 50% Off Year 1, Earn 50% Commissions For Life—Double
                      After Year 1!
                    </h3>
                    <p className="text-sm/relaxed">
                      Offer Your Friends 50% Off Their First Year Of
                      ConnectSponsors On Both Our Startup And Pro Plans. Earn
                      $124.25/Month Or $1248.50/Year For Year 1, And Double That
                      In Commissions For Every Year After.
                    </p>
                    <p className="text-sm/relaxed">
                      So After The First Year, You'll Be Earning $248.50/Month
                      Or $2498.50/Year For As Long As Your Referral Stays!"
                    </p>
                    <p className="text-sm/relaxed">
                      This Is One Of The Most Generous Affiliate Programs
                      Available—But It Won't Last Forever. Lock In Your Spot Now
                      And Start Building Lifetime Recurring Revenue.
                    </p>
                    <p className="text-sm/relaxed">
                      Affiliates Are Already Seeing Long-Term Success,
                      Generating Consistent Passive Income From Our Program.
                      Don't Miss Your Chance To Secure Lifetime Earnings From
                      Your Referrals.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-medium text-center">
                      Your Affiliate Link
                    </h4>
                    <div className="flex gap-2">
                      <Input
                        className="bg-white text-black"
                        defaultValue="https://Getsponsored.AI.Com/C/YTVS49"
                      />
                      <Button className="bg-[#F5A623] hover:bg-[#F5A623]/90 text-white">
                        Copy
                      </Button>
                      <Edit2 className="ml-2 mt-2 h-4 w-4" />
                    </div>
                  </div>
                  <div className="flex justify-center gap-4 pt-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-[#F5A623] hover:text-[#F5A623]/90"
                    >
                      <Facebook className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-[#F5A623] hover:text-[#F5A623]/90"
                    >
                      <svg
                        width="17"
                        height="22"
                        viewBox="0 0 17 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                      >
                        <path
                          d="M8.79235 0C3.04918 0 0 3.86606 0 8.07713C0 10.0322 1.03668 12.4692 2.70096 13.2452C2.9534 13.3632 3.0871 13.3092 3.14297 13.0652C3.18987 12.8802 3.41537 11.9762 3.51514 11.5542C3.53408 11.4871 3.5353 11.4163 3.51868 11.3486C3.50207 11.2809 3.46818 11.2188 3.42035 11.1682C2.87158 10.5012 2.43456 9.27215 2.43456 8.12713C2.43456 5.18508 4.65759 2.34004 8.44213 2.34004C11.7148 2.34004 14.0007 4.57007 14.0007 7.76613C14.0007 11.3762 12.1848 13.8742 9.81905 13.8742C8.51297 13.8742 7.53316 12.7932 7.84546 11.4612C8.22262 9.87716 8.949 8.16313 8.949 7.02311C8.949 5.9971 8.39823 5.14008 7.26775 5.14008C5.92975 5.14008 4.85814 6.52511 4.85814 8.38113C4.85814 9.56315 5.25725 10.3592 5.25725 10.3592C5.25725 10.3592 3.9372 15.9523 3.69773 16.9933C3.28566 18.7583 3.74862 21.6183 3.79152 21.8694C3.81248 22.0034 3.96314 22.0494 4.04296 21.9354C4.17167 21.7604 5.76412 19.3703 6.21211 17.6433L7.03827 14.4722C7.47629 15.3012 8.74146 16.0033 10.0924 16.0033C14.1045 16.0033 17 12.3002 17 7.70413C17.002 3.30105 13.41 0 8.79235 0Z"
                          fill="#FFA51F"
                        />
                      </svg>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-[#F5A623] hover:text-[#F5A623]/90"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-[#F5A623] hover:text-[#F5A623]/90"
                    >
                      <Linkedin className="h-5 w-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="mt-6 px-52 text-center">
              <h2 className="mb-6 text-2xl font-bold">
                These Sponsorship Partners Have Actively Contacted Us To Be Your &nbsp;
                <span className="text-[#FFA51F]">
                  Long-Term Sponsor
                </span>
              </h2>
              <p className="mb-4 text-sm text-white">
                For better deals with our featured sponsorship partners: Feel
                free to contact them and mention that you came from
                “ConnectSponsors.com” (we take 0% of your negotiated deals)
              </p>
              <p className="text-sm text-white">
                Your account does not have access to our Featured sponsorship partners
              </p>
              <div className="text-white text-sm">
                <Button
                  variant="link"
                  className="px-1 text-[#FFA51F] underline"
                >
                  Click Here
                </Button>
                to gain access
              </div>
            </div>
            <div className="mt-6">
              <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
                {[
                  {
                    title: "Adcreative.Ai",
                    description:
                      "Generate Conversion-Focused Ad Creatives And Social Media Posts In A Matter Of Seconds Using Artificial Intelligence. Get Your Free Trial Here.",
                    bg: "bg-[#FFBAD5]",
                    logo: card1,
                  },
                  {
                    title: "Spocket",
                    description:
                      "Discover Top Dropshipping Suppliers Of Original US/EU Products",
                    bg: "bg-[#E0CDFF]",
                    logo: card2,
                  },
                  {
                    title: "Exploding Topics",
                    description:
                      "Discover Exploding Trends Before They Take Off.",
                    bg: "bg-[#C2D8FF]",
                    logo: card3,
                  },
                  {
                    title: "InFlow",
                    description: "Manage Your Stock And Orders From Any Device",
                    bg: "bg-[#FFA51F]",
                    logo: card4,
                  },
                  {
                    title: "RevealBot",
                    description:
                      "Automate Your Ad Management Routine So You Can Focus On Reaching Results, Faster.",
                    bg: "bg-[#EDEDED]",
                    logo: card5,
                  },
                  {
                    title: "Trainual",
                    description:
                      "Easily Systemize And Scale The Way You Work With SOPs",
                    bg: "bg-[#CFB6FF]",
                    logo: card6,
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className={`w-[353.78px] h-[389.42px] overflow-hidden rounded-[21px] bg-white`}
                    style={{
                      boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <div
                      className={`w-[353.78px] h-[219.22px] ${item.bg} flex items-center justify-center rounded-[21px] border-[0.89px] border-[#FFA51F]`}
                    >
                      <img
                        src={item.logo}
                        alt={`${item.title} logo`}
                        width={189}
                        height={87}
                        className="object-contain"
                      />
                    </div>
                    <div className="bg-white p-6 h-[170.2px]">
                      <h3 className="text-xl font-semibold text-black mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default App
