const mockData = [
    {
        id:1,
        category:"CORPORATE", 
        data:"Vega",
        videoURL:"https://www.youtube.com/watch?v=zKmkEcG1TCk",
        thumbnailURL:"./assets/images/womensday-yt.jpg",
        embedCode:'<iframe width="100%" height="500px" src="https://www.youtube.com/embed/zKmkEcG1TCk?si=yENk054HctfRwYbB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'

    },
    {
        id:2,
        category:"CORPORATE", 
        data:"IDMS",
        videoURL:"https://www.youtube.com/watch?v=baloS-8R2eQ",
        thumbnailURL:"./assets/images/IDMS-yt.jpg",
        embedCode:'<iframe width="100%" height="500px" src="https://www.youtube.com/embed/baloS-8R2eQ?si=l__toNKQsh1Yt7SP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'

    },
    {
        id:3,
        category:"CORPORATE", 
        data:"IDMS",
        videoURL:"https://www.youtube.com/watch?v=CAt1kRqwrHs",
        thumbnailURL:"./assets/images/IDMS2-yt.jpg",
        embedCode:'<iframe width="100%" height="500px" src="https://www.youtube.com/embed/CAt1kRqwrHs?si=Do0MrfgsY0ErkbzG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'

    },
    {
        id:4,
        category:"CORPORATE", 
        data:"Mehandi Sarees",
        videoURL:"https://www.youtube.com/watch?v=xixMi-8yv9U",
        thumbnailURL:"./assets/images/mehandi-yt.jpg",
        embedCode:'<iframe width="100%" height="500px" src="https://www.youtube.com/embed/xixMi-8yv9U?si=q7q-fAQ_Fe038lhk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'

    },
    {
        id:5,
        category:"CORPORATE", 
        data:"Expert Enterprises",
        videoURL:"https://youtu.be/Q-SV6hBSYvU",
        thumbnailURL:"./assets/images/expert-enterprises-yt.jpg",
        embedCode:'<iframe width="100%" height="500px" src="https://www.youtube.com/embed/Q-SV6hBSYvU?si=ME4jd_ACUXWbA7w2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'

    },
    {
        id:6,
        category:"CORPORATE", 
        data:"Covid Food Distribution",
        videoURL:"https://youtu.be/ZimTO8BS0Tk",
        thumbnailURL:"./assets/images/Covid-food-yt.jpg",
        embedCode:'<iframe width="100%" height="500px" src="https://www.youtube.com/embed/ZimTO8BS0Tk?si=m7OE0036ZIn8oKDp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'

    },
    {
        id:7,
        category:"VIDEO", 
        data:"Tinka",
        videoURL:"https://www.youtube.com/watch?v=e5KAdU2yrNk",
        thumbnailURL:"./assets/images/Tinka-yt.jpg",
        embedCode:'<iframe width="100%" height="500px" src="https://www.youtube.com/embed/e5KAdU2yrNk?si=Mi9Oob1jVLcBOfEW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'

    },
    {
        id:8,
        category:"VIDEO", 
        data:"Nirbhaya",
        videoURL:"https://www.youtube.com/watch?v=3hr9pOVAcYo",
        thumbnailURL:"./assets/images/Nirbhaya-yt.jpg",
        embedCode:'<iframe width="100%" height="500px" src="https://www.youtube.com/embed/3hr9pOVAcYo?si=4oOPkm1o9mhglerc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
        id:9,
        category:"PHOTOGRAPHY", 
        data:"Product-Images",
        thumbnailURL:"./assets/images/Product-photos/image4.jpg",
        images:['./assets/images/Product-photos/image1.jpg', './assets/images/Product-photos/image2.jpg','./assets/images/Product-photos/image3.jpg','./assets/images/Product-photos/image4.jpg','./assets/images/Product-photos/image5.jpg']
    },
    {
        id:10,
        category:"PHOTOGRAPHY", 
        data:"Sugar-Factory",
        thumbnailURL:"./assets/images/Sugar-factory/image1.jpg",
        images:['./assets/images/Sugar-factory/image1.jpg', './assets/images/Sugar-factory/image2.jpg']
    },
    {
        id:11,
        category:"PHOTOGRAPHY", 
        data:"Office-Images",
        thumbnailURL:"./assets/images/Office-Images/img1.jpg",
        images:['./assets/images/Office-Images/img2.jpg', './assets/images/Office-Images/img3.jpg','./assets/images/Office-Images/img4.jpg','./assets/images/Office-Images/img5.jpg','./assets/images/Office-Images/img6.jpg','./assets/images/Office-Images/img7.jpg','./assets/images/Office-Images/img8.jpg','./assets/images/Office-Images/img1.jpg',]
    },
    {
        id:12,
        category:"IN HOSUSE PRODUCTION", 
        data:"#505",
        videoURL:"https://www.youtube.com/watch?v=8TSU7fPqAEw",
        thumbnailURL:"./assets/images/505-yt.jpg",
        embedCode:'<iframe width="100%" height="500px" src="https://www.youtube.com/embed/8TSU7fPqAEw?si=9hMN_Vs3t3iA6gKj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'

    },
    {
        id:13,
        category:"IN HOSUSE PRODUCTION", 
        data:"Two Wheeler",
        videoURL:"https://youtu.be/D9puxi1v7Fc",
        thumbnailURL:"./assets/images/2-wheeler-yt.jpg",
        embedCode:'<iframe width="100%" height="500px" src="https://www.youtube.com/embed/D9puxi1v7Fc?si=JZK4hzYW0uatxjvw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
        id:14,
        category:"IN HOSUSE PRODUCTION", 
        data:"Silhouette",
        videoURL:"https://www.youtube.com/watch?v=fZNx0dYvsuE&t=1087s",
        thumbnailURL:"./assets/images/Silhoute-yt.jpg",
        embedCode:'<iframe width="100%" height="500px" src="https://www.youtube.com/embed/fZNx0dYvsuE?si=d5KIknCgOB6an7Zg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'

    }
]

const photographyTiles = ['Sugar-Factory', 'Product-Images', 'Office-Images']

window.onload = function ()
{
    handlePageContent("ALL")
} 

function handleTab(ele) {
    document.querySelectorAll('.tab-selector-buttons').forEach((val) =>{
        val.classList.remove("active");
    })
    ele.classList.add("active")
    handlePageContent(ele.textContent)
}

function handlePageContent(value) {
    document.getElementsByClassName('tab-cotent')[0].innerHTML = "";
    const childData =  mockData.map(data => {
        if(value == 'ALL') {
            return `<div class="tile-head col-md-6 col-sm-12  p-2" onclick=handleModal(event)>
            <div class="tab-content-tile" data-tile=${data.id} style="background-image: url(${data.thumbnailURL})">
                <h2 class="tile-title" data-tile=${data.id}>${data.data}</h2>
                </div>
            </div>`
        } else{
            if(data.category == value) {
                return `<div class="tile-head col-md-6 col-sm-12  p-2" onclick=handleModal(event)>
                <div class="tab-content-tile" data-tile=${data.id} style="background-image: url(${data.thumbnailURL})">
                <h2 class="tile-title" data-tile=${data.id}>${data.data}</h2>
                </div>
            </div>`
            }
        }
    })
    document.getElementsByClassName('tab-cotent')[0].innerHTML = childData.join('')
}

function handleModal(e) {
    e.stopPropagation()
    const tileId = Number(e.target.dataset.tile);
    const tileData = mockData.find((data) => data.id === tileId);
    let carouselHtmlData = []
    if(photographyTiles.includes(tileData.data)){
        const images = tileData.images;
        carouselHtmlData = images.map((image, index) =>{
            return `<div class="${ index === 0  ? "carousel-item active" : "carousel-item"}">
                <img src=${image} class="d-block w-100" alt="...">
            </div>`
        })
        document.getElementsByClassName("carousel-inner")[0].innerHTML = carouselHtmlData.join(" ")
        $('.carousel-control-next').css({"display":"block"});
        $('.carousel-control-prev').css({"display":"block"});
    } else {
        document.getElementsByClassName("carousel-inner")[0].innerHTML = tileData.embedCode;
        $('.carousel-control-next').css({"display":"none"});
        $('.carousel-control-prev').css({"display":"none"});
    }
    $('#fullScreenModel').modal('show');

    $('.carousel').carousel({
        interval: 1000
      })
}

$('#fullScreenModel').on('hidden.bs.modal', function (e) {
    // call your method
    document.getElementsByClassName("carousel-inner")[0].innerHTML = ""
 })
