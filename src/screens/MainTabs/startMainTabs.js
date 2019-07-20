import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';


const startApp = async () => {


   try {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: "click.LeaderBoardScreen",
                    label: "Leaderboard",
                    title: "Leaderboard",
                    icon: await Icon.getImageSource('md-map', 30),
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: await Icon.getImageSource('md-map', 30),
                                title: "sideDrawer",
                                id: 'sideDrawerToggle'
                            }
                        ]
                    }
                },
                {
                    screen: "click.CheckoutScreen",
                    label: "Checkout",
                    title: "Checkout",
                    icon: await Icon.getImageSource('md-map', 30),
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: await Icon.getImageSource('md-map', 30),
                                title: "sideDrawer",
                                id: 'sideDrawerToggle'
                            }
                        ]
                    }
                },
                {
                    screen: "click.ProfileScreen",
                    label: "Checkout",
                    title: "Checkout",
                    icon: await Icon.getImageSource('ios-share-alt', 30),
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: await Icon.getImageSource('md-map', 30),
                                title: "sideDrawer",
                                id: 'sideDrawerToggle'
                            }
                        ]
                    }
                }
            ],
            drawer: {
                left: {
                    screen: 'click.SideDrawerScreen'
                }
            }
        })
   }catch(err) {
        console.log(err)
   }

    
}

export default startApp;
