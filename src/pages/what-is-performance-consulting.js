import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <h1>Performance Consulting is...</h1>
    <p>...performed by performance consultants who use more of a systems-thinking approach to resolving workplace performance</p>

    <input type="radio" name="tabs" id="tab1"/> 
      <label for="tab1">Read more...</label>  
    <br />
      <div class="tab content1">
        <p>What is performance consulting?</p>
        <p>Common</p>
      </div>
    <input type="radio" name="tabs" id="tab2"/> 
      <label for="tab2">Sites</label>
    <br />
    <input type="radio" name="tabs" id="tab3" />
    <label for="tab3">Articles!</label> 
    <br />
    <input type="radio" name="tabs" id="tab4" />
    <label for="tab4">Books!</label>
    <br />
    <br />

    <div id="usefulEmail">
      <h3>✨ Do you work in L&#38;D? ✨</h3>
      <p>Sign up to useful stuff!</p>
    </div>
    <br />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Learn Performance Consulting" />

export default SecondPage
