import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { BsThreeDots } from "react-icons/bs";
import { TonConnectButton } from "@tonconnect/ui-react";
import Amount from "./amount";
import Button from "./button";
import Version from "./version";

const achievementSets = [
    [
      { text: 'Log in 7 days in a row', imgSrc: 'https://placehold.co/400' },
      { text: 'Tap 1000 times', imgSrc: 'https://placehold.co/400' },
      { text: 'Collect 500000 coins', imgSrc: 'https://placehold.co/400' },
    ],
    [
      { text: 'Be an Alpha Tester', imgSrc: 'https://placehold.co/400' },
      { text: 'Collect 10 Million Coins', imgSrc: 'https://placehold.co/400' },
      { text: 'Play for 24 hours', imgSrc: 'https://placehold.co/400' },
    ],
  ];

const Profile = ({ amount, handleBoostsUI, handleEarnUI, handleProfileUI, handleDonateUI }) => {
    const [currentSet, setCurrentSet] = useState(0);

    const handleSwipeLeft = () => {
        setCurrentSet((prevSet) => (prevSet + 1) % achievementSets.length);
    };

    const handleSwipeRight = () => {
        setCurrentSet((prevSet) => (prevSet - 1 + achievementSets.length) % achievementSets.length);
    };

    const handlers = useSwipeable({
        onSwipedLeft: handleSwipeLeft,
        onSwipedRight: handleSwipeRight,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    const earnAchievement = () => {

    };

    return(
        <div className="mobile">
            <Amount 
                amount={amount}
            />
            <div className="profile-div">
                <p className="profile-headline">Profile</p>
                <hr />
                <div className="profile-container">
                    <div className="profile-info">
                        <img src="/assets/images/Avatar.jpg" alt="Avatar" />
                        <div className="profile-info-grid">
                            <p>Username:<span> @RaiRaijin</span></p>
                            <p>Playtime: 00D 00H 00M</p>
                            <p>Alpha Tester: No / Yes</p>
                            <p>Donator:<span className="beta"> Coming in Beta</span></p>
                        </div>
                    </div>
                    <hr />
                    <div className="achievement-container" {...handlers}>
                        <div className="achievement-grid">
                        {achievementSets[currentSet].map((item, index) => (
                            <div key={index} className="achievement-item">
                                <p>{item.text}</p>
                                <img src={item.imgSrc} alt="achievement" />
                            </div>
                            ))}
                        </div>
                    </div>
                    <BsThreeDots className="dots"/>
                    <TonConnectButton className="connect" style={{ margin: "0 auto" }}/>
                </div>   
            </div>
            <div className="buttons-grid">
            <Button 
                    buttonClass="button inactive"
                    imgSrc="/assets/images/Boost.svg"
                    alt="Boost"
                    handleChange={handleBoostsUI}
                    name="Boosts"
                />
                <Button 
                    buttonClass="button inactive"
                    imgSrc="/assets/images/Tasks.svg"
                    alt="Tasks"
                    handleChange={handleProfileUI}
                    name="Tasks"
                />
                <Button 
                    buttonClass="button inactive"
                    imgSrc="/assets/images/Token-Small.png"
                    alt="Tap"
                    handleChange={handleEarnUI}
                    name="Earn"
                />
                <Button 
                    buttonClass="button active"
                    imgSrc="/assets/images/Profile.svg"
                    alt="Profile"
                    name="Profile"
                />
                <Button 
                    buttonClass="button inactive"
                    imgSrc="/assets/images/Donate.svg"
                    alt="Donate"
                    handleChange={handleDonateUI}
                    name="Donate"
                />
            </div>
            <Version />
        </div>
    );
};

export default Profile