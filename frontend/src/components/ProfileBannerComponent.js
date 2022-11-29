import avatarIcon from "../images/avatarIcon.jpg"
const ProfileBannerComponent = () => {
    return (
        <>
            {/* TODO: DELETE */}
            < div style={{
                "backgroundColor": "#ff9900",
                "color": "white", padding: "20px", "size": "20px"
            }}> Barkery Navigation Bar</div >

            <div id="banner">
                <img src={avatarIcon} alt="" />
            </div>
        </>
    )
}

export default ProfileBannerComponent