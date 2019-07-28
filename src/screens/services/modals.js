import Icon from 'react-native-vector-icons/Ionicons';

export const OpenPlayModal = async (props) => {
    props.navigator.showModal({
        screen: 'click.PlayModal', // unique ID registered with Navigation.registerScreen
        title: 'Play', // title of the screen as appears in the nav bar (optional)
        navigatorButtons: {
            leftButtons: [
                {
                    icon: await Icon.getImageSource('md-arrow-round-back', 30),
                    title: "Play",
                    id: 'closeModal'
                }
            ]
        }, // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
        animationType: 'slide-up', // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
    });
}

export const OpenWonModal = async (props) => {
    props.navigator.showModal({
        screen: 'click.WonModal', // unique ID registered with Navigation.registerScreen
        title: 'You Won!', // title of the screen as appears in the nav bar (optional)
        navigatorButtons: {
            leftButtons: [
                {
                    icon: await Icon.getImageSource('md-arrow-round-back', 30),
                    title: "You won!",
                    id: 'closeModal'
                }
            ]
        }, // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
        animationType: 'slide-up', // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
    });
}

export const OpenLostModal = async (props) => {
    props.navigator.showModal({
        screen: 'click.LostModal', // unique ID registered with Navigation.registerScreen
        title: 'You Lost :(', // title of the screen as appears in the nav bar (optional)
        navigatorButtons: {
            leftButtons: [
                {
                    icon: await Icon.getImageSource('md-arrow-round-back', 30),
                    title: "You Lost :(",
                    id: 'closeModal'
                }
            ]
        }, // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
        animationType: 'slide-up', // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
    });
}


export const OpenQuizeModal = async (props) => {
    props.navigator.showModal({
        screen: 'click.QuizeModal', // unique ID registered with Navigation.registerScreen
        title: 'Questions', // title of the screen as appears in the nav bar (optional)
        navigatorButtons: {
            leftButtons: [
                {
                    icon: await Icon.getImageSource('md-arrow-round-back', 30),
                    title: "back",
                    id: 'closeModal'
                }
            ]
        }, // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
        animationType: 'slide-up', // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
    });
}
