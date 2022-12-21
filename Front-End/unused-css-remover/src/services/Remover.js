import axios from "axios"

let url = "http://localhost:4000/api/v1/remove-unused-css"

export const getOptimizedCss = async (html,css) =>{
    try{
        let response = await axios.post(url, {html:html,css:css})
        let optimizedCss = response.data;
        return optimizedCss;
    }catch(ex){
        throw ex
    }
}
// this.getOptimizedCss(" <p class=\"gp\">hell</p>", "g{hell: neo}.gp{hell: yeah}")