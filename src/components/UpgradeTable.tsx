import React from "react";
import { useState } from "react";

function UpgradeTable(){
    const upgrade = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                upgrades([
                    { "upgrade": "Suspension Upgrades", "price": 939 },
                    { "upgrade": "Turbocharger", "price": 531 },
                    { "upgrade": "SportSeats", "price": 1174 },
                    { "upgrade": "Window Tint", "price": 1492 },
                    { "upgrade": "Underbody Neon Lights", "price": 1226 }
                  ]);
            })
        })
    }
    
    return(
        
    )
}

export default UpgradeTable;
