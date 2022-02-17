import React from "react";
import fetch from "isomorphic-unfetch";

import Menu from "../components/Menu";
import Info from "../components/Info";
import Footer from "../components/Footer";

export default class Index extends React.Component {
  static async getInitialProps() {
    const url =
      "https://api-eu-central-1.graphcms.com/v2/ckzqq89965f8r01z2anrrakj3/master";
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
        {
          categories {
            name
            subcategories {
              name
              menuItems {
                description
                price
              }
            }
          }
        }
        `
      })
    };
    const { data } = await fetch(url, options).then(res => res.json());
    return { data };
  }
  render() {
      return(
        <React.Fragment>    
        <Menu data={this.props.data} />
        <style global jsx>{`
            html,
            body {
            padding: 0;
            margin: 0;
            }
            * {
            box-sizing: border-box;
            }
        `}</style>
        <Info />
        <Footer />
        </React.Fragment>
  );
  }
}