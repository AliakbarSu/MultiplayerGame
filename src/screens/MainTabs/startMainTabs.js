import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';


const startApp = async () => {


    

   try {
    const leftButtons = [
            {
                icon: await Icon.getImageSource('md-menu', 30),
                title: "sideDrawer",
                id: 'sideDrawerToggle'
            }
        ]
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: "click.LeaderBoardScreen",
                    label: "Leaderboard",
                    title: "Leaderboard",
                    icon: await Icon.getImageSource('md-map', 30),
                    navigatorButtons: {
                        leftButtons: leftButtons
                    }
                },
                {
                    screen: "click.HomeScreen",
                    label: "Home",
                    title: "Home",
                    icon: await Icon.getImageSource('md-map', 30),
                    navigatorButtons: {
                        leftButtons: leftButtons
                    }
                },
                {
                    screen: "click.ProfileScreen",
                    label: "Checkout",
                    title: "Checkout",
                    icon: await Icon.getImageSource('ios-share-alt', 30),
                    navigatorButtons: {
                        leftButtons: leftButtons
                    }
                }
            ],
            passProps: {
            },
            tabsStyle: { 
                initialTabIndex: 1, // optional, the default selected bottom tab. Default: 0. On Android, add this to appStyle
            },
            appStyle: {
                initialTabIndex: 1
            },
            drawer: {
                left: {
                    screen: 'click.SideDrawerScreen'
                },
                right: {
                    screen: 'click.SideDrawerScreen'
                }
            }
        })
   }catch(err) {
        console.log(err)
   }

    
}

export default startApp;
