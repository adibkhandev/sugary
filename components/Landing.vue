<script setup type="text/javascript">
	let layout = ref(0);
    let animationSubheading = ref(true)
    watch(layout , async()=>{
         console.log("layout chaged")
         animationSubheading.value = true
    })

	let list = [
        {   
        	heading:'personalized gifting',
        	subheading:'Our connection to each other is precious!',
        	details:'Every human is different in their own way, each of us having individual taste and choices in life, to cheer up you loved one; get personalized gifts with the help of or expert curations and assistance.',
        	img_url:"Home1.webp",
        },
        {   
        	heading:'Art of gifting',
        	subheading:'personalized gifting',
        	details:"Sugary is a special gift bakery that curates love for your special ones and hopes to put some love back into the art of gift-giving. Gifts for all of life's ocassions focusing on the art of gift-giving.All our gifts are cutom curated according to your budget and the receivers personality" ,
        	img_url:"Home2.webp",
        },
        {   
        	heading:'creative curating experts ',
        	subheading:'discuss with experts',
        	details:"We undestand each of us have preferences for using different brands and products, it is also important to make sure the gift you're sending or receiving is worth your time and money.Our curating experts continously explore thousands of products and brands to verify reveiws of each item we list for gifting.",
        	img_url:"Home3.webp",
        },
        {   
        	heading:'For every ocassion',
        	subheading:'The future of gifting',
        	details:'We are extremely lucky to have such an amazing team here at studio! House Sugary has a talented team of curators, creative crafting experts and designers and such a great management system that helps the experience stand out in every ocassioions. All the materials we release every season for gifting; is developed and designed by House Sugary.',
        	img_url:"Home4.webp",
        },
	]
    let forward = ()=>{
        console.log('kkk')
    	if (layout.value<list.length-1){
        layout.value++
        }
    	 else {
    	 	console.log('ashe')
    	 	layout.value = 0
    	 }
    };
    let backword = () => {

    	 if(layout.value>0){
    	 layout.value--
    	 }
    };
    let change = (index) => {
        if(animationSubheading.value==false){
         layout.value = index
         console.log(index,"changed to")
     }
    }
    let unmount = () => {
        animationSubheading.value = false
        console.log('animation hoise')
    }
    let image = list[layout.value].img_url;
</script>

<template>
  <div class="landing">
  	<Nav></Nav>
    <div class="hero-section">
    <img :src="list[layout].img_url"/>
    <div class="texts">
    	<h1 class="heading">
    		{{list[layout].heading}}
    	</h1>
    	<div class="line">
    		
    	</div>
    	<h1 
         class="subheading"
         :class="{animateLanding:animationSubheading}"
         @animationend="unmount"         
         >
    		{{list[layout].subheading}}
    	</h1>
    	<h1 class="details">
    		{{list[layout].details}}
    	</h1>
        <div class="switcher">
            <div class="dots">
                <div v-for="(data,index) in list" @click="change(index)" class="dot"></div>
            </div>
        </div>
    </div>
        
    </div>
    <Cards></Cards>
    
  </div>



</template>

<style lang="scss">
    @keyframes heading {
     0%{
        margin-bottom:-6rem;
        opacity:0.6;
      }
     100%{
        margin-bottom:0;
        opacity:1;
      }
    }

    .animateLanding{
        animation:heading 1s ease-in-out;    
    }
    *
    {
    	margin:0;
    	padding:0;
    }
	.landing{
		position:relative;
        .hero-section{
		  width:100vw;
		  height:100vh;
		  overflow:hidden;
          margin-top:clamp(-6.8rem,-7.8vw,-5rem);
		img{
			width:100%;
            @media (max-width:1050px){
               height: 100%;
               width: auto;
            }

		}
		.texts{
			width:53%;
			height:100vh;
			margin-left:clamp(2.2rem,3.5vw,4rem);
            position:absolute;
            top:0;
            display:flex;
            flex-direction:column;
            justify-content:center;
            @media (max-width:525px){
               width:75%;
            }
            h1,p{
            	color:white;
            }
            .heading{
            	font-size:clamp(0.5rem,1.3vw,1.1rem);
            	font-family:Monserrate; 
            	font-weight:100;
            	letter-spacing:9px;
            	word-spacing:clamp(0.7rem,1.4vw,1.1rem);
            	text-transform:uppercase;
            	margin-bottom:1.6em; 
                white-space: nowrap;
                 @media (max-width:525px){
                     font-size:clamp(0.6rem,1.6vw,1rem);
                     letter-spacing:6px;
                     word-spacing:12px;
                     margin-bottom:1.2em; 
                 }
            }
            .subheading{
            	font-size:clamp(1.9rem,4.4vw,8rem);
            	font-family:NoeDisplay;
                font-weight:800;
            	margin-bottom:0.2em;
                margin-top: 0.4em;
                 
                   

            }
            .details{
            	width:90%;
            	font-family: 'Cairo';
            	font-weight:100;
            	font-size:clamp(0.9rem,1.3vw,1.22rem);
            	opacity: 0.7;
            }
            .line{
            	width:clamp(12rem,14vw,18rem);
            	height:1px;
            	background-color:white;
            	margin-bottom:1.4em; 
                @media (max-width:525px){
                    height: 0.7px;
                 }

            }
            .switcher{
             margin-top:2.6rem;
             .dots{
                display:flex;
                font-size:clamp(0.6rem,1vw,1.4rem);
                .dot{
                    font-size:inherit;
                    width:0.5em;
                    height:0.5em;
                    margin-right:0.45em;
                    background-color:white;
                    border-radius:1000px;
                    opacity:0.7;
                    cursor: pointer;
                }
            }

            }
		}

        }
	}

</style>