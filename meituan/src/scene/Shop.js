import React, { Component } from 'react';
import {View, Text, StyleSheet, StatusBar, ListView,Dimensions,
	Image, TouchableOpacity, ScrollView, RefreshControl} from 'react-native';
	import ScrollableTabView, {ScrollableTabBar } from 'react-native-scrollable-tab-view';
	import { Actions } from 'react-native-router-flux';
	import AllOrder from './Allorder';
	import Shopshangjia from '../widget/Shopshangjia';
	import Shopdiancan from '../widget/Shopdiancan';


	export default class Shop extends Component{
		//重写back按钮
		static renderBackButton = () => {
			return (
				<View >
				<TouchableOpacity onPress={Actions.pop}>
				<Image  style={{height:30,width:50,}}
				source={require('../img/back.png')}/>
				</TouchableOpacity>
				</View>
				);
		}

		static renderTitle =()=>{
			return(
				<View style={styles.headercontainer} >
				
				<View style={styles.headertextcontainer}>
				<TouchableOpacity>
				<Text style={styles.headertext}> 拼单</Text>
				</TouchableOpacity>
				</View>

				</View>	
				);

		}


		renderhead(){
			return(
				<View style={styles.headercontainer}>
				</View>

				);
		}



		render(){
			let shopinfo=this.props.shopinfo;
			let img=this.props.img;
			return(
				<View>
				{this.renderhead()}
				<View style={styles.header2}>
				<Image style={styles.header2img} source={img}/>
				<Text style={styles.headershopname}>{shopinfo.shopname}</Text>
				<Text style={styles.headershopstate}>正常营业，欢迎光临★★★</Text>
				<Text style={styles.headerfooter}>新用户立减5元,银行卡首单最高减少...</Text>
				<View style={styles.headerright}>
				<TouchableOpacity>
				<Text style={{fontSize:30,color:'white',textAlign:'center'}}>☆</Text>
				<Text style={{fontSize:12,color:'white',textAlign:'center',}}>收藏</Text>
				</TouchableOpacity>
				</View>
				</View>
				
				<View style={{height:sch-140,}}>
				<ScrollableTabView 

				tabBarPosition='overlayTop'
				tabBarUnderlineStyle={{backgroundColor: 'transparent'}}
				tabBarBackgroundColor='#f3f1a5'
				tabBarActiveTextColor='#050505'
				tabBarInactiveTextColor='#656565'
				tabBarTextStyle={{fontSize: 18}}
				locked={false}
				initialPage={0}
				 >
				<Shopdiancan tabLabel="点菜" shopinfo={shopinfo} />

				<Text tabLabel="评价"
				style={{
					marginTop:50,
					fontSize:49,
					textAlign:'center',
					color:'black',
					height:900,
						backgroundColor:'#FCFBD5',

				}}>
				暂无评价
				</Text>	
				<Shopshangjia tabLabel="商家"  shopinfo={shopinfo}/>

			


				</ScrollableTabView>

				</View>

		




				</View>



				);
		}

	}

	let scw=Dimensions.get('window').width;
	let sch=Dimensions.get('window').height;
	const styles=StyleSheet.create({
		headercontainer:{
			backgroundColor:'#4bbe97',
			height:60,
			justifyContent:'center',
			

		},

		headertextcontainer:{
			position:'absolute',
			right:10,
			borderWidth:1,
			borderColor:'white',
			
		},

		headertext:{
			fontSize:20,
			textAlign:'right',
			color:'white',
		},
		header2:{
			height:60,
			backgroundColor:'#4bbe97',
		},

		header2img:{
			height:60,
			width:60,
			position:'absolute',
			
			
			borderRadius:30,
		},

		headershopname:{
			position:'absolute',
			top:0,
			left:65,
			fontSize:25,
			color:'#2E2E2E',
			fontWeight:'bold',

		},
		headershopstate:{
			position:'absolute',
			top:30,
			left:65,
			fontSize:11,
			color:'#181818',

		},
		headerright:{
			position:'absolute',
			top:0,
			right:10,
			width:40,
			height:60,
			borderLeftWidth:1,
			borderColor:'white',
			
		},
		headerfooter:{
			position:'absolute',
			bottom:0,
			left:65,
			color:'#FFFFFF',
			fontSize:9,


		},




	});


	