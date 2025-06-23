convert.$(document).ready(function () {
  const trendingColors = {
    "23TH21": ["Navy/White", "White/Navy"],
    "24THTEFB": ["Navy/White", "Charcoal/White"],
    "25THATP": ["Red/White", "White/Navy"],
    "25THATPM": ["Blue Bird/White", "Charcoal/White"],
    "23TH20": ["Black/White", "Navy/White"],
    "25THATR": ["White/Navy/Red", "White/Soft Pink"],
    "23TH22": ["Navy/White", "Vintage Blue/White"],
    "25THVTP": ["Blue Bird/White", "White/Navy/Red"],
    "24THTA": ["White/Black", "Blue Bird/Navy"],
    "24THPT": ["Black/White", "Navy/White"],
    "24THPCV": ["Black/White", "Navy/White"],
    "25THAPBM": ["Hunter/White", "Charcoal/White"],
    "24THMA": ["White/Black", "Black/Black"],
    "25THAMTLW": ["Black/White", "Blue Bird/White"],
    "24THCB": ["Burgundy/Navy/White", "Grey/Black/White"],
    "23TH08": ["Washed Indigo/White", "Black/Camo"],
    "23TH16": ["Black/White", "White/Navy/Red"],
    "23TH11": ["Eucalyptus/Lemon", "White/Soft Pink/Burgundy"],
    "24THSC": ["Burgundy/Black/White", "Navy/Navy/White"],
    "25THALG": ["Navy"],
    "25THAWTP": ["Lemon/Marble/White", "Marble/Soft Pink/White"],
    "25THAWPBM": ["Blue Bird/Washed Indigo/White", "Charcoal/Lemon"],
    "23TH24": ["Washed Indigo/Bluebird/White"],
    "24THWCB": ["White", "Navy"],
    "23TH30": ["White/Black", "White/Soft Pink/Marble"],
    "25THAJRTP": ["Blue Bird/Navy", "Eucalyptus/White"],
    "23TH12": ["White/Blue Bird/Soft Pink", "White/Washed Indigo/Gray"],
    "22TH07": ["Blue Bird/White", "White/Black"],
    "22TH06": ["Blue Bird/White/Washed Indigo"],
    "24THTETF": ["Charcoal/White", "Navy/White"],
    "23TGB05": ["Navy", "Grey/Graphite"],
    "25TBSX5": ["Black", "Black/Black/Red"],
    "23TGB06": ["Black", "Sand/Navy"],
    "23TGB04": ["White/Navy", "Navy/White/Red"], // only one color featured since Navy/Red is not listed
    "047GB1T": ["Navy/Grey", "White/Black/Grey"],
    "048GB1T": ["Black/Black/Red", "White/Black"],
    "22TGB02": ["Black", "Navy"],
    "22TGB01": ["White/Black/Grey", "Charcoal/Graphite/Black"],
    "23TGB07": ["Black/Black/Red"],
    "23TGB03": ["Baltic/Cool Gray"],
  };

  const htmlCode = {
    "23TH21": [
      {
        color: "Navy/White",
        element: `
                      <li class="selectable">
                        <a class="swatchanchor" href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=23TH21&amp;dwvar_23TH21_color=NVYWHT" title="Select Color: Navy/White" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dw853fb5d2/TH23FTEL-41_01.png&quot;, &quot;title&quot;:&quot;Tour Elite&quot;, &quot;alt&quot;:&quot;Tour Elite&quot;, &quot;hires&quot;:&quot;&quot;}">
                          <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dw2de7c259/TH23FTEL-41_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="Navy/White">
                          </a>
                      </li>`,
      },
      {
        color: "White/Navy",
        element: `
                      <li class="selectable">
                          <a class="swatchanchor" 
                          href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=23TH21&amp;dwvar_23TH21_color=WHTNVY" 
                          title="Select Color: White/Navy" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dwa481cdbb/TH23FTEL-14_01.png&quot;, &quot;title&quot;:&quot;Tour Elite&quot;, &quot;alt&quot;:&quot;Tour Elite&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dwc94cf4b1/TH23FTEL-14_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="White/Navy">
                          </a>
                      </li>`,
      },
    ],
    "24THTEFB": [
      {
        color: "Navy/White",
        element: `<li class="selectable">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=24THTEFB&amp;dwvar_24THTEFB_color=NVYWHT" title="Select Color: Navy/White" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dw45b20950/TH24ATEFB-41_01.png&quot;, &quot;title&quot;:&quot;Tour Elite Flat Bill&quot;, &quot;alt&quot;:&quot;Tour Elite Flat Bill&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dwb3fc6813/TH24ATEFB-41_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="Navy/White">
                          </a>
                      </li>`,
      },
      {
        color: "Charcoal/White",
        element: `<li class="selectable">
                          <a class="swatchanchor" href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=24THTEFB&amp;dwvar_24THTEFB_color=CHRWHT" title="Select Color: Charcoal/White" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dw617b4e71/TH24ATEFB-0C1_01.png&quot;, &quot;title&quot;:&quot;Tour Elite Flat Bill&quot;, &quot;alt&quot;:&quot;Tour Elite Flat Bill&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dwbf4b0509/TH24ATEFB-0C1_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="Charcoal/White">
                          </a>
                      </li>`,
      },
    ],
    "25THATP": [
      {
        color: "Red/White",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=25THATP&amp;dwvar_25THATP_color=REDWH" title="Select Color: Red/White" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dw9075e4f3/TH25ATP-61_01.png&quot;, &quot;title&quot;:&quot;Tour Performance&quot;, &quot;alt&quot;:&quot;Tour Performance&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dwbdc31948/TH25ATP-61_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="Red/White">
                          </a>
                      </li>`,
      },
      {
        color: "White/Navy",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=25THATP&amp;dwvar_25THATP_color=WHTNVY" title="Select Color: White/Navy" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dw2e6b6ced/TH25ATP-14_01.png&quot;, &quot;title&quot;:&quot;Tour Performance&quot;, &quot;alt&quot;:&quot;Tour Performance&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dw729ad9a5/TH25ATP-14_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="White/Navy">
                          </a>
                      </li>`,
      },
    ],
    "25THATPM": [
      {
        color: "Blue Bird/White",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=25THATPM&amp;dwvar_25THATPM_color=BLUBRDWHT" title="Select Color: Blue Bird/White" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dw3e81c5ab/TH25ATPM-4B1_01.png&quot;, &quot;title&quot;:&quot;Tour Performance Mesh&quot;, &quot;alt&quot;:&quot;Tour Performance Mesh&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dw33ecb1b6/TH25ATPM-4B1_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="Blue Bird/White">
                          </a>
                      </li>`,
      },
      {
        color: "Charcoal/White",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=25THATPM&amp;dwvar_25THATPM_color=CHRWHT" title="Select Color: Charcoal/White" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dwb481ba0b/TH25ATPM-0C1_01.png&quot;, &quot;title&quot;:&quot;Tour Performance Mesh&quot;, &quot;alt&quot;:&quot;Tour Performance Mesh&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dw890c637b/TH25ATPM-0C1_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="Charcoal/White">
                          </a>
                      </li>`,
      },
    ],
    "23TH20": [
      {
        color: "Black/White",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=23TH20&amp;dwvar_23TH20_color=BLKWHT" title="Select Color: Black/White" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dw649f92eb/TH23ATBRZN2-01_01.png&quot;, &quot;title&quot;:&quot;Tour Breezer&quot;, &quot;alt&quot;:&quot;Tour Breezer&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dw2598b62a/TH23ATBRZN2-01_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="Black/White">
                          </a>
                      </li>`,
      },
      {
        color: "Navy/White",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=23TH20&amp;dwvar_23TH20_color=NVYWHT" title="Select Color: Navy/White" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dw12a73211/TH23ATB-41_01.png&quot;, &quot;title&quot;:&quot;Tour Breezer&quot;, &quot;alt&quot;:&quot;Tour Breezer&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dw6ce61180/TH23ATB-41_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="Navy/White">
                          </a>
                      </li>`,
      },
    ],
    "25THATR": [
      {
        color: "White/Navy/Red",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=25THATR&amp;dwvar_25THATR_color=WHTNVYRED" title="Select Color: White/Navy/Red" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dw8952804d/TH25ATR-146_01.png&quot;, &quot;title&quot;:&quot;Tour Rope&quot;, &quot;alt&quot;:&quot;Tour Rope&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dw22ff8a29/TH25ATR-146_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="White/Navy/Red">
                          </a>
                      </li>`,
      },
      {
        color: "White/Soft Pink",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=25THATR&amp;dwvar_25THATR_color=WHTPNK" title="Select Color: White/Soft Pink" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dw5a730576/TH25ATR-15S_01.png&quot;, &quot;title&quot;:&quot;Tour Rope&quot;, &quot;alt&quot;:&quot;Tour Rope&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dw84572bd8/TH25ATR-15S_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="White/Soft Pink">
                          </a>
                      </li>`,
      },
    ],
    "23TH22": [
      {
        color: "Navy/White",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=23TH22&amp;dwvar_23TH22_color=NVYWHT" title="Select Color: Navy/White" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dwc302fc99/TH23ATF-41_01.png&quot;, &quot;title&quot;:&quot;Tour Featherweight&quot;, &quot;alt&quot;:&quot;Tour Featherweight&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dwa427390e/TH23ATF-41_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="Navy/White">
                          </a>
                      </li>`,
      },
      {
        color: "Vintage Blue/White",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=23TH22&amp;dwvar_23TH22_color=BLUWHT" title="Select Color: Vintage Blue/White" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dwe3d802d9/TH23ATF-4V1_01.png&quot;, &quot;title&quot;:&quot;Tour Featherweight&quot;, &quot;alt&quot;:&quot;Tour Featherweight&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dwca21f3f8/TH23ATF-4V1_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="Vintage Blue/White">
                          </a>
                      </li>`,
      },
    ],
    "25THVTP": [
      {
        color: "Blue Bird/White",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=25THVTP&amp;dwvar_25THVTP_color=BLUBRDWHT" title="Select Color: Blue Bird/White" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dw276518c0/TH25VTP-4B1_01.png&quot;, &quot;title&quot;:&quot;Tour Performance Visor&quot;, &quot;alt&quot;:&quot;Tour Performance Visor&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dw7e42dccb/TH25VTP-4B1_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="Blue Bird/White">
                          </a>
                      </li>`,
      },
      {
        color: "White/Navy/Red",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=25THVTP&amp;dwvar_25THVTP_color=WHTNVYRED" title="Select Color: White/Navy/Red" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dwe226556d/TH25VTP-146_01.png&quot;, &quot;title&quot;:&quot;Tour Performance Visor&quot;, &quot;alt&quot;:&quot;Tour Performance Visor&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dwbfb10797/TH25VTP-146_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="White/Navy/Red">
                          </a>
                      </li>`,
      },
    ],
    "24THTA": [
      {
        color: "White/Black",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=24THTA&amp;dwvar_24THTA_color=WHTBLK" title="Select Color: White/Black" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dw7090ae82/TH24TAUS-10_01.png&quot;, &quot;title&quot;:&quot;Tour Aussie&quot;, &quot;alt&quot;:&quot;Tour Aussie&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dwd0929b17/TH24TAUS-10_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="White/Black">
                          </a>
                      </li>`,
      },
      {
        color: "Blue Bird/Navy",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=24THTA&amp;dwvar_24THTA_color=BLUBRDNVY" title="Select Color: Blue Bird/Navy" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dw9447e89d/TH24TAUS-4B4_01.png&quot;, &quot;title&quot;:&quot;Tour Aussie&quot;, &quot;alt&quot;:&quot;Tour Aussie&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dwdd75a1fc/TH24TAUS-4B4_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="Blue Bird/Navy">
                          </a>
                      </li>`,
      },
    ],
    "24THPT": [
      {
        color: "Black/White",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=24THPT&amp;dwvar_24THPT_color=BLKWHT" title="Select Color: Black/White" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dw8a820511/TH24APT-01_01.png&quot;, &quot;title&quot;:&quot;Players Tech&quot;, &quot;alt&quot;:&quot;Players Tech&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dwc483dfe7/TH24APT-01_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="Black/White">
                          </a>
                      </li>`,
      },
      {
        color: "Navy/White",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=24THPT&amp;dwvar_24THPT_color=NVYWHT" title="Select Color: Navy/White" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dweaf7e71e/TH24APT-41_01.png&quot;, &quot;title&quot;:&quot;Players Tech&quot;, &quot;alt&quot;:&quot;Players Tech&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dw489c0a34/TH24APT-41_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="Navy/White">
                          </a>
                      </li>`,
      },
    ],
    "24THPCV": [
      {
        color: "Black/White",
        element: ``,
      },
      {
        color: "Navy/White",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=24THPCV&amp;dwvar_24THPCV_color=NVYWHT" title="Select Color: Navy/White" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dw5fcdaf19/TH24VPCL-41_01.png&quot;, &quot;title&quot;:&quot;Players Classic Visor&quot;, &quot;alt&quot;:&quot;Players Classic Visor&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dwc85d7c35/TH24VPCL-41_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="Navy/White">
                          </a>
                      </li>`,
      },
    ],
    "25THAPBM": [
      {
        color: "Hunter/White",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=25THAPBM&amp;dwvar_25THAPBM_color=HUNWHT" title="Select Color: Hunter/White" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dwce3262c3/TH25APBM-31_02.png&quot;, &quot;title&quot;:&quot;Players Performance Ball Marker&quot;, &quot;alt&quot;:&quot;Players Performance Ball Marker&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dw2d0920fa/TH25APBM-31_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="Hunter/White">
                          </a>
                      </li>`,
      },
      {
        color: "Charcoal/White",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=25THAPBM&amp;dwvar_25THAPBM_color=CHRWHT" title="Select Color: Charcoal/White" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dw2f0f7515/TH25APBM-0C1_02.png&quot;, &quot;title&quot;:&quot;Players Performance Ball Marker&quot;, &quot;alt&quot;:&quot;Players Performance Ball Marker&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dwa73d63a8/TH25APBM-0C1_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="Charcoal/White">
                          </a>
                      </li>`,
      },
    ],
    "24THMA": [
      {
        color: "White/Black",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=24THMA&amp;dwvar_24THMA_color=WHTBLK" title="Select Color: White/Black" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dw03b773d6/TH24AMTA-10_01.png&quot;, &quot;title&quot;:&quot;Montauk Ace&quot;, &quot;alt&quot;:&quot;Montauk Ace&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dw9a03d59e/TH24AMTA-10_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="White/Black">
                          </a>
                      </li>`,
      },
      {
        color: "Black/Black",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=24THMA&amp;dwvar_24THMA_color=BLK" title="Select Color: Black/Black" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dwe5c4fc98/TH24AMTA-00_01.png&quot;, &quot;title&quot;:&quot;Montauk Ace&quot;, &quot;alt&quot;:&quot;Montauk Ace&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dw9f890886/TH24AMTA-00_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="Black/Black">
                          </a>
                      </li>`,
      },
    ],
    "25THAMTLW": [
      {
        color: "Black/White",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=25THAMTLW&amp;dwvar_25THAMTLW_color=BLKWHT" title="Select Color: Black/White" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dwff356156/TH25AMTLW-001_01.png&quot;, &quot;title&quot;:&quot;Montauk Lightweight&quot;, &quot;alt&quot;:&quot;Montauk Lightweight&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dwf71d50cc/TH25AMTLW-001_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="Black/White">
                          </a>
                      </li>`,
      },
      {
        color: "Blue Bird/White",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=25THAMTLW&amp;dwvar_25THAMTLW_color=BLUBRDWHT" title="Select Color: Blue Bird/White" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dw5f2dd216/TH25AMTLW-4B1_01.png&quot;, &quot;title&quot;:&quot;Montauk Lightweight&quot;, &quot;alt&quot;:&quot;Montauk Lightweight&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dwd09e9a40/TH25AMTLW-4B1_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="Blue Bird/White">
                          </a>
                      </li>`,
      },
    ],
    "24THCB": [
      {
        color: "Burgundy/Navy/White",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=24THCB&amp;dwvar_24THCB_color=REDNVYWHT" title="Select Color: Burgundy/Navy/White" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dw6bd7bfa8/TH24ACHBZ-641_01.png&quot;, &quot;title&quot;:&quot;Charleston Breezer&quot;, &quot;alt&quot;:&quot;Charleston Breezer&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dw048d09fd/TH24ACHBZ-641_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="Burgundy/Navy/White">
                          </a>
                      </li>`,
      },
      {
        color: "Grey/Black/White",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=24THCB&amp;dwvar_24THCB_color=GRYBLKWHT" title="Select Color: Grey/Black/White" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dw76a1f65d/TH24ACHBZ-001_01.png&quot;, &quot;title&quot;:&quot;Charleston Breezer&quot;, &quot;alt&quot;:&quot;Charleston Breezer&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dw84226c5c/TH24ACHBZ-001_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="Grey/Black/White">
                          </a>
                      </li>`,
      },
    ],
    "23TH08": [
      {
        color: "Washed Indigo/White",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=23TH08&amp;dwvar_23TH08_color=INDWHT" title="Select Color: Washed Indigo/White" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dw6a08cce2/TH23ABR-4W1_01.png&quot;, &quot;title&quot;:&quot;Boardwalk Rope&quot;, &quot;alt&quot;:&quot;Boardwalk Rope&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dwd5563ee2/TH23ABR-4W1_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="Washed Indigo/White">
                          </a>
                      </li>`,
      },
      {
        color: "Black/Camo",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=23TH08&amp;dwvar_23TH08_color=BLKCMO" title="Select Color: Black/Camo" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dwee3f0aeb/TH23ABR-0_01.png&quot;, &quot;title&quot;:&quot;Boardwalk Rope&quot;, &quot;alt&quot;:&quot;Boardwalk Rope&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dw74846f90/TH23ABR-0_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="Black/Camo">
                          </a>
                      </li>`,
      },
    ],
    "23TH16": [
      {
        color: "Black/White",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=23TH16&amp;dwvar_23TH16_color=BLKWHT" title="Select Color: Black/White" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dwf144e3b4/TH23A0-01_01.png&quot;, &quot;title&quot;:&quot;Oceanside&quot;, &quot;alt&quot;:&quot;Oceanside&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dw04e53ad7/TH23A0-01_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="Black/White">
                          </a>
                      </li>`,
      },
      {
        color: "White/Navy/Red",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=23TH16&amp;dwvar_23TH16_color=WHTNVYRED" title="Select Color: White/Navy/Red" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dwba795743/TH23AO-146_01.png&quot;, &quot;title&quot;:&quot;Oceanside&quot;, &quot;alt&quot;:&quot;Oceanside&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dwee381355/TH23AO-146_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="White/Navy/Red">
                          </a>
                      </li>`,
      },
    ],
    "23TH11": [
      {
        color: "Eucalyptus/Lemon",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=23TH11&amp;dwvar_23TH11_color=GRNYLW" title="Select Color: Eucalyptus/Lemon" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dw4e384c61/TH23ADGO-37_01.png&quot;, &quot;title&quot;:&quot;Diego&quot;, &quot;alt&quot;:&quot;Diego&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dw80cadea4/TH23ADGO-37_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="Eucalyptus/Lemon">
                          </a>
                      </li>`,
      },
      {
        color: "White/Soft Pink/Burgundy",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=23TH11&amp;dwvar_23TH11_color=WHTPNKRED" title="Select Color: White/Soft Pink/Burgundy" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dwae6df738/TH23ADGO-156_01.png&quot;, &quot;title&quot;:&quot;Diego&quot;, &quot;alt&quot;:&quot;Diego&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dw317980bb/TH23ADGO-156_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="White/Soft Pink/Burgundy">
                          </a>
                      </li>`,
      },
    ],
    "24THSC": [
      {
        color: "Burgundy/Black/White",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=24THSC&amp;dwvar_24THSC_color=REDBLKWHT" title="Select Color: Burgundy/Black/White" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dw337880e1/TH24ASCR-601_01.png&quot;, &quot;title&quot;:&quot;Santa Cruz&quot;, &quot;alt&quot;:&quot;Santa Cruz&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dw80666258/TH24ASCR-601_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="Burgundy/Black/White">
                          </a>
                      </li>`,
      },
      {
        color: "Navy/Navy/White",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=24THSC&amp;dwvar_24THSC_color=NVYNVYWHT" title="Select Color: Navy/Navy/White" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dwc0b0400f/TH24ASCR-441_01.png&quot;, &quot;title&quot;:&quot;Santa Cruz&quot;, &quot;alt&quot;:&quot;Santa Cruz&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dw11866c9f/TH24ASCR-441_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="Navy/Navy/White">
                          </a>
                      </li>`,
      },
    ],
    "25THALG": [
      {
        color: "Navy",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=25THALG&amp;dwvar_25THALG_color=NVY" title="Select Color: Navy" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dw4fa9e3b3/TH25ALG-4_01.png&quot;, &quot;title&quot;:&quot;Laguna&quot;, &quot;alt&quot;:&quot;Laguna&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dw0ede4c88/TH25ALG-1_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="Navy">
                          </a>
                      </li>`,
      },
    ],
    "25THAWTP": [
      {
        color: "Lemon/Marble/White",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=25THAWTP&amp;dwvar_25THAWTP_color=YLWGRYWHT" title="Select Color: Lemon/Marble/White" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dw92245095/TH25AWTP-701_01.png&quot;, &quot;title&quot;:&quot;Women" s="" tour="" performance",="" "alt":"women's="" "hires":""}'="">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dwcdfd34e9/TH25AWTP-701_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="Lemon/Marble/White">
                          </a>
                      </li>`,
      },
      {
        color: "Marble/Soft Pink/White",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=25THAWTP&amp;dwvar_25THAWTP_color=GRYPNKWHT" title="Select Color: Marble/Soft Pink/White" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dwf3d09db8/TH25AWTP-051_01.png&quot;, &quot;title&quot;:&quot;Women" s="" tour="" performance",="" "alt":"women's="" "hires":""}'="">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dwf3d09db8/TH25AWTP-051_01.png?sw=60&amp;sh=60&amp;sm=fit" alt="Marble/Soft Pink/White">
                          </a>
                      </li>`,
      },
    ],
    "25THAWPBM": [
      {
        color: "Blue Bird/Washed Indigo/White",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=25THAWPBM&amp;dwvar_25THAWPBM_color=BLUINDWHT" title="Select Color: Blue Bird/Washed Indigo/White" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dw69106409/TH25AWPBM-441_02.png&quot;, &quot;title&quot;:&quot;Women" s="" players="" performance="" ball="" marker",="" "alt":"women's="" "hires":""}'="">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dw69106409/TH25AWPBM-441_02.png?sw=60&amp;sh=60&amp;sm=fit" alt="Blue Bird/Washed Indigo/White">
                          </a>
                      </li>`,
      },
      {
        color: "Charcoal/Lemon",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=25THAWPBM&amp;dwvar_25THAWPBM_color=CHRYLW" title="Select Color: Charcoal/Lemon" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dwfca2775b/TH25AWPBM-0C7_02.png&quot;, &quot;title&quot;:&quot;Women" s="" players="" performance="" ball="" marker",="" "alt":"women's="" "hires":""}'="">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dwfca2775b/TH25AWPBM-0C7_02.png?sw=60&amp;sh=60&amp;sm=fit" alt="Charcoal/Lemon">
                          </a>
                      </li>`,
      },
    ],
    "23TH24": [
      {
        color: "Washed Indigo/Bluebird/White",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=23TH24&amp;dwvar_23TH24_color=INDBLUBWHT" title="Select Color: Washed Indigo/Bluebird/White" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dw6934c767/TH23AWBR-441_01.png&quot;, &quot;title&quot;:&quot;Women" s="" boardwalk="" rope",="" "alt":"women's="" "hires":""}'="">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dwf7ea9094/TH23AWBR-441_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="Washed Indigo/Bluebird/White">
                          </a>
                      </li>`,
      },
    ],
    "24THWCB": [
      {
        color: "White",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=24THWCB&amp;dwvar_24THWCB_color=WHT" title="Select Color: White" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dwe9ad92b8/TH24AWCHBZ-1_01.png&quot;, &quot;title&quot;:&quot;Women" s="" charleston="" breezer",="" "alt":"women's="" "hires":""}'="">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dw230fb477/TH24AWCHBZ-1_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="White">
                          </a>
                      </li>`,
      },
      {
        color: "Navy",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=24THWCB&amp;dwvar_24THWCB_color=NVY" title="Select Color: Navy" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dw370b8896/TH24AWCHBZ-4_01.png&quot;, &quot;title&quot;:&quot;Women" s="" charleston="" breezer",="" "alt":"women's="" "hires":""}'="">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dw4f1ea3f5/TH24AWCHBZ-4_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="Navy">
                          </a>
                      </li>`,
      },
    ],
    "23TH30": [
      {
        color: "White/Black",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=23TH30&amp;dwvar_23TH30_color=WHTBLK" title="Select Color: White/Black" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dw5ae3e285/TH23WSVN2-10_01.png&quot;, &quot;title&quot;:&quot;Women" s="" sundrop="" visor",="" "alt":"women's="" "hires":""}'="">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dw4ac3c48e/TH23WSVN2-10_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="White/Black">
                          </a>
                      </li>`,
      },
      {
        color: "White/Soft Pink/Marble",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=23TH30&amp;dwvar_23TH30_color=WHTPNKGRY" title="Select Color: White/Soft Pink/Marble" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dw52e3f794/TH23WSV-150_01.png&quot;, &quot;title&quot;:&quot;Women" s="" sundrop="" visor",="" "alt":"women's="" "hires":""}'="">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dw96f2cc84/TH23WSV-150_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="White/Soft Pink/Marble">
                          </a>
                      </li>`,
      },
    ],
    "25THAJRTP": [
      {
        color: "Blue Bird/Navy",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=25THAJRTP&amp;dwvar_25THAJRTP_color=BLUBRDNVY" title="Select Color: Blue Bird/Navy" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dwf694f08b/TH25AJRTP-4B4_01.png&quot;, &quot;title&quot;:&quot;Junior Tour Performance&quot;, &quot;alt&quot;:&quot;Junior Tour Performance&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dw86d01a57/TH25AJRTP-4B4_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="Blue Bird/Navy">
                          </a>
                      </li>`,
      },
      {
        color: "Eucalyptus/White",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=25THAJRTP&amp;dwvar_25THAJRTP_color=EUCWHT" title="Select Color: Eucalyptus/White" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dwa61a78b6/TH25AJRTP-3E1_01.png&quot;, &quot;title&quot;:&quot;Junior Tour Performance&quot;, &quot;alt&quot;:&quot;Junior Tour Performance&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dw7963e53d/TH25AJRTP-3E1_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="Eucalyptus/White">
                          </a>
                      </li>`,
      },
    ],
    "23TH12": [
      {
        color: "White/Blue Bird/Soft Pink",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=23TH12&amp;dwvar_23TH12_color=WHTBLUPNK" title="Select Color: White/Blue Bird/Soft Pink" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dw290ee0a3/TH23AJBR-145_01.png&quot;, &quot;title&quot;:&quot;Junior Boardwalk Rope&quot;, &quot;alt&quot;:&quot;Junior Boardwalk Rope&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dweca49a96/TH23AJBR-145_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="White/Blue Bird/Soft Pink">
                          </a>
                      </li>`,
      },
      {
        color: "White/Washed Indigo/Gray",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=23TH12&amp;dwvar_23TH12_color=WHTBLUGRY" title="Select Color: White/Washed Indigo/Gray" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dw5bef7c56/TH23AJBR-140G_01.png&quot;, &quot;title&quot;:&quot;Junior Boardwalk Rope&quot;, &quot;alt&quot;:&quot;Junior Boardwalk Rope&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dw612102ef/TH23AJBR-140G_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="White/Washed Indigo/Gray">
                          </a>
                      </li>`,
      },
    ],
    "22TH07": [
      {
        color: "Blue Bird/White",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=22TH07&amp;dwvar_22TH07_color=BLUBRDWHT" title="Select Color: Blue Bird/White" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dwdb3998d7/TH22CHAUS-4B1_01.png&quot;, &quot;title&quot;:&quot;Charleston Aussie&quot;, &quot;alt&quot;:&quot;Charleston Aussie&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dwcba99031/TH22CHAUS-4B1_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="Blue Bird/White">
                          </a>
                      </li>`,
      },
      {
        color: "White/Black",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=22TH07&amp;dwvar_22TH07_color=WHTBLK" title="Select Color: White/Black" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dwcb9421a6/TH22CHAUS-10B_01.png&quot;, &quot;title&quot;:&quot;Charleston Aussie&quot;, &quot;alt&quot;:&quot;Charleston Aussie&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dwb88ca970/TH22CHAUS-10B_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="White/Black">
                          </a>
                      </li>`,
      },
    ],
    "22TH06": [
      {
        color: "Blue Bird/White/Washed Indigo",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=22TH06&amp;dwvar_22TH06_color=BLUWHTIND" title="Select Color: Blue Bird/White/Washed Indigo" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dwdd63bd06/TH22BRZB-414_01.png&quot;, &quot;title&quot;:&quot;Breezer Bucket&quot;, &quot;alt&quot;:&quot;Breezer Bucket&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dw3fb821e2/TH22BRZB-414_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="Blue Bird/White/Washed Indigo">
                          </a>
                      </li>`,
      },
    ],
    "24THTETF": [
      {
        color: "Charcoal/White",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=24THTETF&amp;dwvar_24THTETF_color=CHRWHT" title="Select Color: Charcoal/White" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dw5736ea8b/TH24FTETF-0C7_01.png&quot;, &quot;title&quot;:&quot;Tour Elite TrueFit&quot;, &quot;alt&quot;:&quot;Tour Elite TrueFit&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dwff9b5169/TH24FTETF-0C7_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="Charcoal/White">
                          </a>
                      </li>`,
      },
      {
        color: "Navy/White",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=24THTETF&amp;dwvar_24THTETF_color=NVYWHT" title="Select Color: Navy/White" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dw6170cc2c/TH24FTETF-4678_01.png&quot;, &quot;title&quot;:&quot;Tour Elite TrueFit&quot;, &quot;alt&quot;:&quot;Tour Elite TrueFit&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dw3d67acf4/TH24FTETF-4678_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="Navy/White">
                          </a>
                      </li>`,
      },
    ],
    "23TGB05": [
      {
        color: "Navy",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=23TGB05&amp;dwvar_23TGB05_color=NVY" title="Select Color: Navy" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dw9d08b51a/TB23SX2-4_01.png&quot;, &quot;title&quot;:&quot;Players 4 StaDry&quot;, &quot;alt&quot;:&quot;Players 4 StaDry&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dw7064eb14/TB23SX2-4_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="Navy">
                          </a>
                      </li>`,
      },
      {
        color: "Grey/Graphite",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=23TGB05&amp;dwvar_23TGB05_color=GRYGRPH" title="Select Color: Grey/Graphite" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dw8646a051/TB23SX2-22_01.png&quot;, &quot;title&quot;:&quot;Players 4 StaDry&quot;, &quot;alt&quot;:&quot;Players 4 StaDry&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dwf6364149/TB23SX2-22_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="Grey/Graphite">
                          </a>
                      </li>`,
      },
    ],
    "25TBSX5": [
      {
        color: "Black",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=25TBSX5&amp;dwvar_25TBSX5_color=BLK" title="Select Color: Black" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dwa526264c/TB25SX5-0_01.png&quot;, &quot;title&quot;:&quot;Players 4 Carbon&quot;, &quot;alt&quot;:&quot;Players 4 Carbon&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dwb7620e6b/TB25SX5-0_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="Black">
                          </a>
                      </li>`,
      },
      {
        color: "Black/Black/Red",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=25TBSX5&amp;dwvar_25TBSX5_color=BLKRED" title="Select Color: Black/Black/Red" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dw3881c83c/TB25SX5-006_01.png&quot;, &quot;title&quot;:&quot;Players 4 Carbon&quot;, &quot;alt&quot;:&quot;Players 4 Carbon&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dw49a7290c/TB25SX5A-006_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="Black/Black/Red">
                          </a>
                      </li>`,
      },
    ],
    "23TGB06": [
      {
        color: "Black",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=23TGB06&amp;dwvar_23TGB06_color=BLK" title="Select Color: Black" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dwc48195b9/TB23SX8-0_01.png&quot;, &quot;title&quot;:&quot;Players 5&quot;, &quot;alt&quot;:&quot;Players 5&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dw87262850/TB23SX8-0_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="Black">
                          </a>
                      </li>`,
      },
      {
        color: "Sand/Navy",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=23TGB06&amp;dwvar_23TGB06_color=TANNVY" title="Select Color: Sand/Navy" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dw18f34d79/TB23SX8-241_01.png&quot;, &quot;title&quot;:&quot;Players 5&quot;, &quot;alt&quot;:&quot;Players 5&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dw9d02c948/TB23SX8-241_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="Sand/Navy">
                          </a>
                      </li>`,
      },
    ],
    "23TGB04": [
      {
        color: "White/Navy",
        element: `<li class="selectable oos-color-swatch ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=23TGB04&amp;dwvar_23TGB04_color=WHTNVY" title="" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dwd311bff7/TB23SX4-14_01.png&quot;, &quot;title&quot;:&quot;Players 4&quot;, &quot;alt&quot;:&quot;Players 4&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dwf0b01132/TB23SX4-14_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="White/Navy">
                          </a>
                      </li>`,
      },
      {
        color: "Navy/White/Red",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=23TGB04&amp;dwvar_23TGB04_color=NVYWHTRED" title="Select Color: Navy/White/Red" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dw089ba825/TB23SX4-46_01.png&quot;, &quot;title&quot;:&quot;Players 4&quot;, &quot;alt&quot;:&quot;Players 4&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dwd795ca3b/TB23SX4-46_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="Navy/White/Red">
                          </a>
                      </li>`,
      },
    ],
    "047GB1T": [
      {
        color: "Navy/Grey",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=047GB1T&amp;dwvar_047GB1T_color=NVYGRY" title="Select Color: Navy/Grey" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dw1900b4d7/TB21SX14-42_01.png&quot;, &quot;title&quot;:&quot;Hybrid 14&quot;, &quot;alt&quot;:&quot;Hybrid 14&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dwbea8427b/TB21SX14-42_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="Navy/Grey">
                          </a>
                      </li>`,
      },
      {
        color: "White/Black/Grey",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=047GB1T&amp;dwvar_047GB1T_color=WHTBLKGRY" title="Select Color: White/Black/Grey" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dw3dcd65f4/TB21SX14-102_01.png&quot;, &quot;title&quot;:&quot;Hybrid 14&quot;, &quot;alt&quot;:&quot;Hybrid 14&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dwe1b6cdfc/TB21SX14-102_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="White/Black/Grey">
                          </a>
                      </li>`,
      },
    ],
    "048GB1T": [
      {
        color: "Black/Black/Red",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=048GB1T&amp;dwvar_048GB1T_color=BLKBLKRED" title="Select Color: Black/Black/Red" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dwfbead559/TB21SX6-006_01.png&quot;, &quot;title&quot;:&quot;Hybrid 5&quot;, &quot;alt&quot;:&quot;Hybrid 5&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dw8916e589/TB21SX6-006_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="Black/Black/Red">
                          </a>
                      </li>`,
      },
      {
        color: "White/Black",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=048GB1T&amp;dwvar_048GB1T_color=WHTBLK" title="Select Color: White/Black" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dwe1e1194a/TB21SX6-10_01.png&quot;, &quot;title&quot;:&quot;Hybrid 5&quot;, &quot;alt&quot;:&quot;Hybrid 5&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dw35ea96d4/TB21SX6-10_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="White/Black">
                          </a>
                      </li>`,
      },
    ],
    "22TGB02": [
      {
        color: "Black",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=22TGB02&amp;dwvar_22TGB02_color=BLK" title="Select Color: Black" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dw2e59dae7/TB22CT8-0_01.png&quot;, &quot;title&quot;:&quot;Cart 15&quot;, &quot;alt&quot;:&quot;Cart 15&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dwab6591fb/TB22CT8-0_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="Black">
                          </a>
                      </li>`,
      },
      {
        color: "Navy",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=22TGB02&amp;dwvar_22TGB02_color=NVY" title="Select Color: Navy" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dw7a34693f/TB22CT8-4_01.png&quot;, &quot;title&quot;:&quot;Cart 15&quot;, &quot;alt&quot;:&quot;Cart 15&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dw06517214/TB22CT8-4_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="Navy">
                          </a>
                      </li>`,
      },
    ],
    "22TGB01": [
      {
        color: "White/Black/Grey",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=22TGB01&amp;dwvar_22TGB01_color=WHTBLKGRY" title="Select Color: White/Black/Grey" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dwbdf6eea7/TB22CT6-102_01.png&quot;, &quot;title&quot;:&quot;Cart 14&quot;, &quot;alt&quot;:&quot;Cart 14&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dw7e860b71/TB22CT6-102_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="White/Black/Grey">
                          </a>
                      </li>`,
      },
      {
        color: "Charcoal/Graphite/Black",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=22TGB01&amp;dwvar_22TGB01_color=CHRGRPHBLK" title="Select Color: Charcoal/Graphite/Black" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dw253b053b/TB22CT6-220_01.png&quot;, &quot;title&quot;:&quot;Cart 14&quot;, &quot;alt&quot;:&quot;Cart 14&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dwb89af7fe/TB22CT6-220_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="Charcoal/Graphite/Black">
                          </a>
                      </li>`,
      },
    ],
    "23TGB07": [
      {
        color: "Black/Black/Red",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=23TGB07&amp;dwvar_23TGB07_color=BLKBLKRED" title="Select Color: Black/Black/Red" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dw0ff6ccf5/TB23CY1-006_01.png&quot;, &quot;title&quot;:&quot;Premium Carry Bag&quot;, &quot;alt&quot;:&quot;Premium Carry Bag&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dw3aa3d515/TB23CY1-006_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="Black/Black/Red">
                          </a>
                      </li>`,
      },
    ],
    "23TGB03": [
      {
        color: "Baltic/Cool Gray",
        element: `<li class="selectable ">
                          <a class="swatchanchor  " href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=23TGB03&amp;dwvar_23TGB03_color=BALGRY" title="Select Color: Baltic/Cool Gray" data-lgimg="{&quot;url&quot;:&quot;/on/demandware.static/-/Sites-titleist-master/default/dwf8ac2b03/TB23CY0-3_01.png&quot;, &quot;title&quot;:&quot;Carry Bag&quot;, &quot;alt&quot;:&quot;Carry Bag&quot;, &quot;hires&quot;:&quot;&quot;}">
                              <img src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dw74d47cd6/TB23CY0-3_sw.png?sw=60&amp;sh=60&amp;sm=fit" alt="Baltic/Cool Gray">
                          </a>
                      </li>`,
      },
    ],
  };

  const getCode = () => {
    const url = window.location.href;
    const params = url.split("/");
    const lastParam = params[params.length - 1];
    const code = lastParam.split(".")[0];
    return code;
  };

  const getTrendingCodes = () => {
    const mainSKU = getCode();
    theCode = mainSKU;
    return trendingColors[mainSKU] || [];
  };

  function waitForElement(selector, callback) {
    const observer = new MutationObserver((mutations) => {
      if (document.querySelector(selector)) {
        observer.disconnect();
        callback();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  const getTheDiv = () => {
    let clss =
      window.innerWidth > 992
        ? ".product-section .promotion"
        : ".product-col-2.product-detail";
    return clss;
  };

  const addSelectedToNew = (prevLi) => {
    const lis = document.querySelectorAll(".test-49 .selectable");
    lis &&
      [...lis].forEach((li) => {
        const newLink = li.querySelector("a");
        const lgimg = newLink.getAttribute("data-lgimg");
        const prevLink = prevLi.querySelector("a");
        const prevLgimg = prevLink.getAttribute("data-lgimg");
        lgimg === prevLgimg && prevLi.classList.contains("selected")
          ? li.classList.add("selected")
          : li.classList.remove("selected");
      });
  };

  const deleteFromPrevious = () => {
    const grandParentToLookUp = document.querySelector(
      ".swatches.color.must-select"
    );
    const parents = grandParentToLookUp?.querySelectorAll("li");

    if (!parents) return;

    const allAnchorsFromHtmlCode = Object.values(htmlCode)
      .flat()
      .map((entry) => {
        const wrapper = document.createElement("div");
        wrapper.innerHTML = entry.element.trim();
        return wrapper.querySelector("a");
      });

    parents.forEach((li) => {
      const anchor = li.querySelector("a");
      if (!anchor) return;

      const anchorLgimg = anchor.getAttribute("data-lgimg");

      const isMatch = allAnchorsFromHtmlCode.some((htmlAnchor) => {
        return htmlAnchor?.getAttribute("data-lgimg") === anchorLgimg;
      });

      if (isMatch) {
        if (li.classList.contains("selected")) {
          addSelectedToNew(li);
        }
        li.remove();
      }
    });
  };

  const createNewSection = () => {
    const divOriginal = document.querySelector(`${getTheDiv()}`);

    if (!divOriginal) return;

    let newElement = document.querySelector(".test-49");

    if (!newElement) {
      newElement = document.createElement("div");
      newElement.classList.add("test-49");
      divOriginal.appendChild(newElement);
    }

    const trending = getTrendingCodes();

    if (!trending || trending.length === 0) return;

    const htmlEntries = htmlCode[theCode];

    if (!htmlEntries || htmlEntries.length === 0) return;

    const matchingElements = trending
      .map((color) => {
        const match = htmlEntries.find((entry) => entry.color === color);
        return match ? match.element : null;
      })
      .filter(Boolean);

    newElement.innerHTML = `
             <div class="product-trendings" data-attributes="{}">
            <ul>
              <li class="attribute">
                <div class="label">Trending Colors</div>
                <div class="value">
                  <ul class="swatches color">
                    ${matchingElements.join("")}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          `;
  };

  const actionAllLis = () => {
    const allLis = document.querySelectorAll(".selectable a");
    [...allLis].forEach((li) => {
      li.addEventListener("click", removeSelected);
    });
  };

  const removeSelected = () => {
    const selectedFeatured = document.querySelector(".test-49 .selected");
    selectedFeatured && selectedFeatured.classList.remove("selected");
  };

  let theCode;
  waitForElement(".product-variations", createNewSection);
  deleteFromPrevious();

  window.addEventListener("resize", () => {
    const existing = document.querySelector(".test-49");
    if (existing) existing.remove();
    createNewSection();
    deleteFromPrevious();
  });

  const newSectionObserver = new MutationObserver(() => {
    if (!document.querySelector(".test-49")) {
      createNewSection();
    }
    window.innerWidth < 992 &&
      document.querySelector(".test-49 .selected") &&
      actionAllLis();
    deleteFromPrevious();
  });

  newSectionObserver.observe(document.body, { childList: true, subtree: true });
});
