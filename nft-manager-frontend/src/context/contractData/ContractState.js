import ContractContext from "./ContractContext";
import Flipkart from "../../artifacts/contracts/Flipkart.sol/Flipkart.json"
import Company from "../../artifacts/contracts/Company.sol/Company.json"
import Category from "../../artifacts/contracts/Category.sol/Category.json"
import Product from "../../artifacts/contracts/Product.sol/Product.json"
const FlipkartAddress = "0xFE5c4fF6541d5982020a4Cf56faC4b59b0782159";

const ContractState = (props)=>{
    return(
        <ContractContext.Provider value={{FlipkartAddress, Flipkart, Company, Category, Product}}>
            {props.children}
        </ContractContext.Provider>
    )
}

export default ContractState;