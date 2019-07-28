


export default (event, props) => {
    console.log(event)
    if(event.type === "NavBarButtonPress") {
        switch(event.id) {
            case "sideDrawerToggle":
                props.navigator.toggleDrawer({
                    side: "left"
                })
                break;
            case "settingsToggle":
                props.navigator.toggleDrawer({
                    side: "right"
                })
                break;
            case "closeModal":
                props.navigator.dismissAllModals({
                    animationType: 'slide-down'
                });
                break;
            default:
                return null;
        }
    }else if(event.type === "DeepLink") {
        switch(event.link) {
            case "profileSettings":
                alert('profilesettings')
            break;
            default: 
                return null;
        }
    }
}



