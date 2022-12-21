import Stocks from './data.js'
import {Link} from 'react-router-dom'
function Dashboard() {

    return (
        <div>
            <div>
                <table>
                    <tr id = "table-catagory">
                        <th>Company Name</th>
                        <th>Price</th>
                        <th>Change</th>
                    </tr>

                        {
                            Stocks.map((stock) => {
                                const {name, symbol, lastPrice, change} = stock

                            return (
                                <tr>
                                     <Link to= {`/stocks/${symbol}`}>
                                    <td>{name}({symbol})</td></Link>
                                    <td>{lastPrice}</td>
                                    <td>{change}</td>
                                </tr>
                                
                           
                           
                                    )
                                })
                        }
                
                

                
        
           
                
                
                
                
                </table>


            
            </div>
        </div>
     
    );
  }
  
  export default Dashboard;