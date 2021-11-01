import React from 'react'
import '../splash.css'

export default function Splash() {

    // const allProducts = Object.values(products)?.map(product => (

    return (
            <div>
                <div className="script">Start your holiday prep with the most meaningful gifts.</div>
                <div className="circle-images-wrapper">

                    <div className="circle-images" style={{backgroundImage:"url(https://assets.weimgs.com/weimgs/rk/images/wcm/products/202142/0115/img34z.jpg)"}}>
                    </div>

                    <div className="circle-images" style={{backgroundImage:"url(https://www.whiteflowerfarm.com/mas_assets/cache/image/7/2/7/9/29305.Jpg)"}}>
                    </div>

                    <div className="circle-images" style={{backgroundImage:"url(https://res.cloudinary.com/trendhim/image/upload/f_auto,c_pad,q_auto,w_1600,h_900/media/cms/395/Image-10.jpg)"}}>
                    </div>

                    <div className="circle-images" style={{backgroundImage:"url(https://img.joomcdn.net/18e3ff0fae24053219a7e109cd83aa85a9004c5f_original.jpeg)"}}>
                    </div>

                    <div className="circle-images" style={{backgroundImage:"url(https://i.etsystatic.com/13251507/r/il/d340a1/2749256200/il_794xN.2749256200_k2zb.jpg)"}}>
                    </div>

                </div>
                {/* <div className="photo-label">
                    <div>Advent calendars</div>
                    <div>Gifts for home</div>
                    <div>Gifts for him</div>
                    <div>Gifts for her</div>
                    <div>Gifts for kids</div>
                    
                </div> */}

            </div>

        )
    
}
