


export default (event, props) => {
    console.log(event)
    if(event.type === "NavBarButtonPress") {
        switch(event.id) {
            case "sideDrawerToggle":
            props.navigator.toggleDrawer({
                side: "left"
            })
            break;
            case "closeModal":
            props.navigator.dismissModal({
                animationType: 'slide-down'
            });
            break;
            default:
                return null;
        }
    }
}

