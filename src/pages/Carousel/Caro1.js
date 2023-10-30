import React from 'react'
import { Grid, Box } from '@mui/material'
import img from "../../assets/images/img3.jpeg"
const Caro1 = () => {
  return (
    // <Grid container spacing={2}>
    //   <Grid item xs={12} sm={6} lg={3}>
    //     <Box style={{ backgroundColor:"blue" , height:"50px" , padding:"10px"  }}>
    //       Item 1
    //     </Box>
    //   </Grid>
    //   <Grid item xs={12} sm={6} lg={3}>
    //     <Box style={{ backgroundColor:"green" ,  height:"50px" , padding:"10px" }}>
    //       Item 2
    //     </Box>
    //   </Grid>
    //   <Grid item xs={12} sm={6} lg={3}> 
    //     <Box style={{ backgroundColor:"yellow" , height:"50px" , padding:"10px"  }}>
    //       Item 3
    //     </Box>
    //   </Grid>
    //   <Grid item xs={12} sm={6} lg={3}>
    //     <Box style={{ backgroundColor:"red" , height:"50px" , padding:"10px"  }}>
    //       Item 4
    //     </Box>
    //   </Grid>

    // </Grid>

    <Grid container>

      <Grid item xs={12} sm={12} md={10} lg={10} paddingBlock={2}>

        <Grid container>
          <Box style={{ backgroundColor: "blue", padding: "10px" }}>
            Chandra Grahan 2023: साल का आखिरी चंद्र ग्रहण 28 अक्टूबर यानी आज लगने जा रहा है. यह चंद्र ग्रहण भारत में दृश्यमान होगा. भारतीय समयानुसार, आज लगने वाला... https://www.aajtak.in/religion/news/story/chandra-grahan-2023-date-and-time-in-india-chandra-grahan-kab-lgega-do-these-auspicious-or-shubh-work-before-sutak-tlifdg-1806705-2023-10-28
          </Box>
        </Grid>

        <Grid container>
          <Box style={{ padding: "10px" }}>
            <img src={img} style={{ height: "150px", width: "150px" }} />
          </Box>
        </Grid>

        <Grid container>
          <Box style={{ backgroundColor: "green", padding: "10px" }}>
            As part of the Mac transition to Intel processors, Apple released a 13-inch laptop simply named "MacBook", as a successor to the PowerPC-based iBook series of laptops. During its existence, it was the most affordable Mac, serving as an entry-level laptop that was less expensive than the rest of the Mac laptop lineup (the MacBook Pro portable workstation, and later the MacBook Air ultra-portable). It was aimed at the consumer and education markets. Successive revisions of the MacBook were sold to consumers between May 2006 and July 2011, by which time it been superseded by the MacBook Air which had a lower entry price.[2] Apple continued to sell the MacBook to educational institutions until February 2012.[3][4]

            During its existence, it was the best-selling Mac in Apple's history. For five months in 2008, it was the best-selling laptop of any brand in US retail stores.[5] Collectively, the MacBook brand was the "world's top-selling line of premium laptops."[6]

            There have been three separate designs of this MacBook. The original design used a combination of polycarbonate and fiberglass casing which was modeled after the iBook G4. The second design, introduced in October 2008 alongside the 15-inch MacBook Pro, shared the latter's unibody aluminium casing, but lacked a FireWire port. A third design, introduced in late 2009, retained a similar unibody construction but changed back to white polycarbonate.

            12-inch MacBook (2015–2019)
            Main article: 12-inch MacBook
            In 2015, Apple introduced the 12-inch MacBook (also called the Retina MacBook, officially marketed as the new MacBook), which sat between the MacBook Air and MacBook Pro in Apple's laptop lineup. It was more compact than any other notebook in the MacBook family at the time and included a Retina display, fanless design, a Butterfly keyboard with lower key travel. It only had a single USB-C port, used for both power and data, as well as a 3.5mm headphone jack. It was released in 2015, revised in 2017, and discontinued in July 2019, a year after the release of the MacBook Air with Retina display.

          </Box>
        </Grid>
      </Grid>

      <Grid xs={12} sm={12} md={3} lg={2} paddingBlock={2} spacing={2}>
        <Box style={{ backgroundColor: "brown", height: "50px", padding: "10px" }}>
          Item 4
        </Box>
      </Grid>

    </Grid>
  )
}

export default Caro1
