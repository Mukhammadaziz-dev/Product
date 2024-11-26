import * as React from "react";
import "./Cliants.css"
import StarGold from "../../images/StrarGold.png"
import StarGoldLine from "../../images/StarGoldLine.png"
import Cliante1 from "../../images/Cliante1.png"
import Cliante2 from "../../images/Cliant2.png"
import Cliante3 from "../../images/Cliant3.png"

const Cliants = () => {
    return(
        <div>
            <div className="container">
                <div className="Cliants">
                    <h1>
                        What Clients Say
                    </h1>
                    <p>
                        Problems trying to resolve the conflict between <br /> 
                        the two major realms of Classical physics: Newtonian mechanics 
                    </p>
                    <div className="CliantsBox">
                        <div className="CliantsBoxs">
                            <div className="RatingBox">
                                <img src={StarGold} alt="StarGold" />
                                <img src={StarGold} alt="StarGold" />
                                <img src={StarGold} alt="StarGold" />
                                <img src={StarGold} alt="StarGold" />
                                <img src={StarGoldLine} alt="StarGoldLine" />
                            </div>
                            <p>
                                Product helps you see how many 
                                more days you need to work to 
                                reach your financial goal.
                            </p>
                            <div className="ClianteProfile">
                                <img src={Cliante1} alt="Cliante1" />
                                <div>
                                    <span>Wahid Ari</span>
                                    <p>Designer</p>
                                </div>
                            </div>
                        </div>
                        <div className="CliantsBoxs">
                            <div className="RatingBox">
                                <img src={StarGold} alt="StarGold" />
                                <img src={StarGold} alt="StarGold" />
                                <img src={StarGold} alt="StarGold" />
                                <img src={StarGold} alt="StarGold" />
                                <img src={StarGoldLine} alt="StarGoldLine" />
                            </div>
                            <p>
                                Product helps you see how many 
                                more days you need to work to 
                                reach your financial goal.
                            </p>
                            <div className="ClianteProfile">
                                <img src={Cliante2} alt="Cliante2" />
                                <div>
                                    <span>Wahid Ari</span>
                                    <p>Designer</p>
                                </div>
                            </div>
                        </div>
                        <div className="CliantsBoxs">
                            <div className="RatingBox">
                                <img src={StarGold} alt="StarGold" />
                                <img src={StarGold} alt="StarGold" />
                                <img src={StarGold} alt="StarGold" />
                                <img src={StarGold} alt="StarGold" />
                                <img src={StarGoldLine} alt="StarGoldLine" />
                            </div>
                            <p>
                                Product helps you see how many 
                                more days you need to work to 
                                reach your financial goal.
                            </p>
                            <div className="ClianteProfile">
                                <img src={Cliante3} alt="Cliante3" />
                                <div>
                                    <span>Wahid Ari</span>
                                    <p>Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cliants;