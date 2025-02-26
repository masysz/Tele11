import { useEffect, useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import Earn from "./earn.jsx";
import Tasks from "./tasks.jsx";
import Boosts, { coinsPerClick } from "./boosts.jsx";
import Profile from "./profile.jsx";
import Shop from "./shop.jsx";
import PC from "./pc.jsx";

const App = () => {
    if(isMobile){
        useEffect(() => {
            document.title = "Comet | Mobile";
        }, []);

        const [amount, setAmount] = useState(0);
        const [showTasks, setShowTasks] = useState(false);
        const [buyBoosts, setBuyBoosts] = useState(false);
        const [earnCoins, setEarnCoins] = useState(false);
        const [showProfile, setShowProfile] = useState(false);
        const [showShop, setShowShop] = useState(false);
        
        const tap = useRef(0);
        const collect = useRef(0);
        
        const resetStates = () => {
            setShowTasks(false);
            setBuyBoosts(false);
            setEarnCoins(false);
            setShowProfile(false);
            setShowShop(false);
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

        const handleShopUI = () => {
            resetStates();
            setShowShop(true);
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
                    handleTasksUI={handleTasksUI} 
                    handleEarnUI={handleEarnUI} 
                    handleProfileUI={handleProfileUI} 
                    handleShopUI={handleShopUI}/>
            );
        } else if(buyBoosts){
            return(
                <Boosts 
                    amount={formatAmount(amount)}
                    handleBoostsUI={handleBoostsUI} 
                    handleTasksUI={handleTasksUI} 
                    handleEarnUI={handleEarnUI} 
                    handleProfileUI={handleProfileUI} 
                    handleShopUI={handleShopUI}/>
            );
        } else if(showProfile){
            return(
                <Profile 
                    amount={formatAmount(amount)} 
                    handleBoostsUI={handleBoostsUI} 
                    handleTasksUI={handleTasksUI} 
                    handleEarnUI={handleEarnUI}
                    handleProfileUI={handleProfileUI} 
                    handleShopUI={handleShopUI}
                    />
            );
        } else if(showShop){
            return(
                <Shop 
                    amount={formatAmount(amount)} 
                    handleBoostsUI={handleBoostsUI} 
                    handleTasksUI={handleTasksUI} 
                    handleEarnUI={handleEarnUI}
                    handleProfileUI={handleProfileUI}
                    handlleShopUI={handleShopUI}
                    />
            );
        } else {
            return(
                <Earn 
                    amount={formatAmount(amount)} 
                    handleTapEvent={handleTapEvent}
                    handleTasksUI={handleTasksUI} 
                    handleBoostsUI={handleBoostsUI} 
                    handleProfileUI={handleProfileUI} 
                    handleShopUI={handleShopUI}/>
                );
        };
    };

    return(
        <PC />
    );
};

export default App;
