 import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import { useState, useEffect } from 'react';
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Loader from "react-loader-spinner";
import Paper from '@material-ui/core/Paper';
import Vector from '../../images/vector.svg';
import Tablet from '../../images/vector1.svg';
import "./Currency.scss";
const fetchCurrency = () => {
    return fetch(`https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`,
    )
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        return data;
      });
};

const financial = (x) => Number.parseFloat(x).toFixed(2);

const Currency = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  
  useEffect(() => {
    setPredicate();
    setIsDesktop(window.innerWidth > 1279);
    getCurrency();
    
  }, []);

  const setPredicate = () => {
    
    window.addEventListener("resize", () => {
      setIsDesktop(window.innerWidth > 1279);
      
      return;
    })
  };
  

  const getCurrency = async () => {
    setLoading(true);
    try {
      const results = await fetchCurrency();
      const filtertdRes = results.filter(result => result.ccy !== "BTC");
      // console.log(filtertdRes);
      setCourses(prev => [...prev, ...filtertdRes]);
    } catch (error) {
      console.error('Smth wrong with search fetch', error);
      
    } finally {
      setLoading(false);
    }
  };


  const useStyles = makeStyles(theme => ({
   
    root: {
      fontFamily: 'Circe',
      "border-top-left-radius": 20,
      "border-top-right-radius": 20,
      padding: 0,
      "border-bottom-left-radius": 20,
      "border-bottom-right-radius": 20
    },
    table: {
      "@media (min-width: 320px) and (max-width:767px )": {
       width: 280 
      },
      "@media (min-width: 768px) and (max-width:1279px )": {
       width: 334 
      },
      "@media (min-width: 1280)": {
        width: 348
      },
       "@media (min-width: 320px) and (max-width:1279px )": {
       
     
      backgroundImage: `url(${Tablet})`,
      backgroundPosition: 'bottom',     
         backgroundRepeat: 'no-repeat',
      "border-bottom-left-radius": 20,
      "border-bottom-right-radius": 20 
       },
      "text-align": "center",
      
      
      "border": "none",
      "background": "#4a56e2",
     
      "border-top-left-radius": 20,
      "border-top-right-radius": 20,
      fontFamily: 'Circe'
    },
    tableBody: {
      
      "@media (min-width: 320px) and (max-width:1279px )": {

      },
      
    },
    head: {
     "@media (min-width: 320px) and (max-width:1279px )": {
       height:50,
      },
     "@media (min-width: 1280)": {
      height: 60
      },

      "text-align": "center",
      "border-bottom": "none",
      "color": "#ffffff",
      "font-size": "18px",
      fontFamily: 'Circe',
      "line-height": "27px",

    },
    headCell: {
     "font-weight": "bold",
      "@media (min-width: 1280)": {
       padding: 0,
      },
      "@media (min-width: 320px) and (max-width:1279px )": {
        padding:0,
      },
     
      "text-align":"center",
      "color": "#ffffff",
      "font-size": "18px",
      fontFamily: 'Circe',
      "border-bottom": "none",
      "line-height": "27px",
      "background": "#6e78e8"
    },
    row: {
        "@media (min-width: 1280)": {
        height: 51
      }
    },
    cell: {
      padding:13,
      "text-align": "center",
      "border": "none",
      "@media (min-width: 320px) and (max-width:1279px )": {
        height: 41,
        padding: 0,
      },
     "@media (min-width: 1280)": {
       height: 51,
      },
      
      fontFamily: 'Circe',
      "color": "#ffffff",
      "font-weight": 400,
      "font-size": "16px",
      "line-height": "24px",
    },
    cellRadiusLeft:{
      "border-top-left-radius": 20,
    },
    cellRadiusRight:{
      "border-top-right-radius": 20,
    },
    vector: {
      
      "background": "#4a56e2",
      "border-bottom-left-radius": 20,
      "border-bottom-right-radius": 20
      
    }
  }));
  const classes = useStyles();
  
  return (
    <div>
      <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead className={classes.head}>
          <TableRow>
              <TableCell className={classes.headCell + ' ' + classes.cellRadiusLeft}>Валюта</TableCell>
            <TableCell className={classes.headCell}>Покупка</TableCell>
            <TableCell className={classes.headCell + ' ' + classes.cellRadiusRight}>Продажа</TableCell>
          </TableRow>
        </TableHead>

        <TableBody className={classes.tableBody}>
          {courses.map((cours) => (
            <TableRow key={cours.ccy} className={classes.row}>
              <TableCell className={classes.cell}>{cours.ccy}</TableCell>
              <TableCell className={classes.cell}>{financial(cours.buy)}</TableCell>
              <TableCell className={classes.cell}>{financial(cours.sale)}</TableCell>
            </TableRow>
          ))}
          
        </TableBody>
        
      </Table>
      </Paper>
      {isLoading && <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />}
      {isDesktop &&
        <div> <img src={Vector} className={classes.vector} alt="vector" /></div>}
  
    </div>
  );
   
};

 

export default Currency;
  



