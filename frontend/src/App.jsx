import { useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import Earn from "./earn.jsx";
import Tasks from "./tasks.jsx";
import Boosts, { coinsPerClick } from "./boosts.jsx";
import Profile from "./profile.jsx";
import Donate from "./donate.jsx";
import PC from "./pc.jsx";

const App = () => {
    if(!isMobile){
        const [amount, setAmount] = useState(0);
        const [showTasks, setShowTasks] = useState(false);
        const [buyBoosts, setBuyBoosts] = useState(false);
        const [earnCoins, setEarnCoins] = useState(false);
        const [showProfile, setShowProfile] = useState(false);
        const [showDonate, setShowDonate] = useState(false);
        
        let tap = useRef(0);
        let collect = useRef(0);
        
        const resetStates = () => {
            setShowTasks(false);
            setBuyBoosts(false);
            setEarnCoins(false);
            setShowProfile(false);
            setShowDonate(false);
        };

        const handleCoin = () => {
            setAmount(a => a + coinsPerClick);
        };
    
        const handleTap = () => {
            tap.current += 1;
        };

        const handleCollect = () => {
            collect.current += coinsPerClick;
        }

        const handleTapEvent = () => {
            handleTap();
            handleCollect();
            handleCoin();
        };

        const handleTasksUI = () => {
            resetStates();
            setShowTasks(true);
        };
    
        const handleBoostsUI = () => {
            resetStates();
            setBuyBoosts(true);
        };

        const handleEarnUI = () => {
            resetStates();
            setEarnCoins(true);
        };

        const handleProfileUI = () => {
            resetStates();
            setShowProfile(true);
        };

        const handleDonateUI = () => {
            resetStates();
            setShowDonate(true);
        }

        const formatAmount = (amount) => {
            if (amount >= 1000000) {
                return (amount / 1000000).toFixed(3) + " M";
            }

            return amount.toString();
        };

        if(showTasks){
            return(
                <Tasks 
                amount={formatAmount(amount)} 
                setAmount={setAmount}
                tap={tap}
                collect={collect} 
                handleBoostsUI={handleBoostsUI} 
                handleEarnUI={handleEarnUI} 
                handleProfileUI={handleProfileUI} 
                handleDonateUI={handleDonateUI}/>
            );
        } else if(buyBoosts){
            return(
                <Boosts 
                amount={formatAmount(amount)} 
                handleTasksUI={handleTasksUI} 
                handleEarnUI={handleEarnUI} 
                handleProfileUI={handleProfileUI} 
                handleDonateUI={handleDonateUI}/>
            );
        } else if(showProfile){
            return(
                <Profile 
                amount={formatAmount(amount)} 
                handleBoostsUI={handleBoostsUI} 
                handleTasksUI={handleTasksUI} 
                handleEarnUI={handleEarnUI} 
                handleDonateUI={handleDonateUI}/>
            );
        } else if(showDonate){
            return(
                <Donate 
                amount={formatAmount(amount)} 
                handleBoostsUI={handleBoostsUI} 
                handleTasksUI={handleTasksUI} 
                handleEarnUI={handleEarnUI}
                handleProfileUI={handleProfileUI}/>
            );
        } else {
            return(
                <Earn 
                amount={formatAmount(amount)} 
                handleTapEvent={handleTapEvent}
                handleTasksUI={handleTasksUI} 
                handleBoostsUI={handleBoostsUI} 
                handleProfileUI={handleProfileUI} 
                handleDonateUI={handleDonateUI}/>
            );
        };
    };

    return(
        <PC />
    );
};

export default App;
