<script setup>
	let navActive = ref(false);
	let switchNavState = () =>{
		navActive.value = !navActive.value
	}

</script>
<template>
	<div class="nav">
		<div class="logo">
			<h1>Sugary</h1>
		</div>
		<div 
		    class="mobile-text-nav"
              :class="{mobileActivate:navActive}"
		    >
				
		</div>
		<div class="buttons">
			<div class="text-nav">
				<a class="link" href="">How?</a>
				<a class="link" href="">Browse Gifts</a>
				<a class="link" href="">ForBuisness</a>
				<a class="link" href="">Recetly served</a>
				<a class="link" href="">About</a>
			</div>
			<button @click="switchNavState()" >
				<svg class="hamburger" viewBox="0 0 100 100" width="30" >
					<rect class="top"  width="70" height="7" x="10" y="25" rx="5"/>
					<rect class="middle"  width="70" height="7" x="10" y="45" rx="5"/>
					<rect class="bottom"  width="70" height="7" x="10" y="65" rx="5"/>

				</svg>
			</button>
			<div class="app-link">
				
			</div>
		</div>

	</div>
</template>
<style lang="scss" scoped>
     .mobileActivate{
     	top:0 !important;
     	transition:top 1s ease-in-out;
     }
	.nav{
		background:rgba(0,0,0,0.50);
		margin:0;
		padding:0;
		backdrop-filter:blur(10px);
		position:sticky;
		top:0em;
        z-index: 2;
		height:clamp(5rem,7.8vw,6.8rem);
		width:100%;
		display:flex;
		justify-content:space-between;
		align-items:center;
		.mobile-text-nav{
			position:absolute;
			top:-100vh;
			background:rgba(0,0,0,0.40);
			height:100vh;
			width:100vw;
			transition:top 1s ease-in-out;
			backdrop-filter:blur(10px);
		}
	}
	.logo{
        h1{
		 color:white;
		 opacity: 0.9;
		 font-family:"Affectionate";
		 font-size:clamp(1rem,2vw,1.4rem);
		 line-height:2;
		 margin-left:1.8em;
		 height:100%;
		}
	}
	.buttons{
		button{
			background-color:rgb(0,0,0,0);
			border-radius:2px;
			border:none;
			outline:none;
			@media (min-width:950px) {
				display:none;
			}
		}
		.hamburger{
			background-color:rgb(0,0,0,0);
			border:none;
			fill:white;
			opacity:0.7;
			margin-right:clamp(1rem,4vw,1.4rem);
		}
	}
	.text-nav {
		font-family:Poppins;
		letter-spacing:1px;
		font-weight:Bold;
		text-transform:uppercase;
		font-size:clamp(0.7rem,1vw,0.8rem);
		color:white; 
		opacity:0.9;
		@media (max-width:950px) {
				display:none;
		}
		.link{
			margin-right:2rem;
			font-family:Poppins;
			font-weight:800;
		}

		
	}
</style>