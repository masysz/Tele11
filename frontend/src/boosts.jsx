import { useEffect } from "react";
import Amount from "./amount";
import Button from "./button";
import Version from "./version";

export let coinsPerClick = 1;

const Boosts = ({ amount, handleTasksUI, handleEarnUI, handleProfileUI, handleDonateUI }) => {
    return(
        <div className="mobile">
            <Amount 
                amount={amount}
            />
            <div className="boosts-div">
                <p className="boosts-headline">Boosts</p>
                <hr />
                <div className="boost-container">
                    <div className="boost">
                        
                    </div>
                    <div className="boost">

                    </div>
                    <div className="boost">

                    </div>
                    <div className="boost">

                    </div>
                    <div className="boost">

                    </div>
                    <div className="boost">

                    </div>
                </div>   
            </div>
            <div className="buttons-grid">
            <Button 
                    buttonClass="button active"
                    imgSrc="/assets/images/Boost.svg"
                    alt="Boost"
                    name="Boosts"
                />
                <Button 
                    buttonClass="button inactive"
                    imgSrc="/assets/images/Tasks.svg"
                    alt="Tasks"
                    handleChange={handleTasksUI}
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
                    buttonClass="button inactive"
                    imgSrc="/assets/images/Profile.svg"
                    alt="Profile"
                    handleChange={handleProfileUI}
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

export default Boosts