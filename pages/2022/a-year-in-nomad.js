import Post from '../../components/layouts/post'
import Header from '../../components/post/header'
import H2  from '../../components/post/heading'
import P from '../../components/post/paragraph'

const Article = () => (
  <>
    <Post>
      <Header title="Nomad, a year in" date="January 12, 2021" />


      <P>
        In 2020 a lot of us were initially pushed to working from home. However, I am lucky that my employer accepted that all positions would be fully remote while still maintaining our office for those that wish to work from there.
      </P>
      <P>
        As a result, I had a chance to experiment life as nomad, 2021 was the first year that I didn't have a full rental contract for an apartment since moving to Europe in 2017. As housing is usually the biggest expense for most people, nomad or not, I decided to compile my costs for this year without a fixed residence and compare them to previous years.
      </P>

      <P>
        Of course it is indeed more expensive to not have a fixed residence in the long term, it's a tradeoff for flexibility. In previous years I had to leave apartments early leading to losing part of my deposits. Barcelona is also infamous for having high contract fees when signing a new apartment contract, roughly 10% of the annual value + fees, so in the end it kind of evens out, below you can see my living expenses in full detail.
      </P>

      <H2>Full list of 2021 stays</H2>

      <P>
        This list includes only places I was renting as a primary residence, I usually book apartments through Airbnb or Booking, and Hotels in Accor:
        <ul>
          <li> Barcelona Ibis Styles Bogatell - <b>17 nights</b>  = <b>495.24</b> </li>
          <li> Barcelona Airbnb in Raval 1 - <b>33 nights</b> = <b>1286.29</b> </li>
          <li> Barcelona Airbnb in Raval 2 - <b>60 nights</b> = <b>2031.26</b> </li>
          <li> Valencia Airbnb shared - <b>6 nights</b> = <b>286</b> </li>
          <li> Madrid Airbnb shared - <b>6 nights</b> = <b>515.33</b> </li>
          <li> Barcelona Eixample LeMar Boutique - <b>2 nights</b> = <b>125.40</b> </li>
          <li> Barcelona Ibis Styles Centre - <b>3 nights</b> = <b>217.72</b> </li>
          <li> Barcelona Eixample Airbnb - <b>45 nights</b> = <b>2583</b> </li>
          <li> Rome Airbnb Trastevere - <b>5 nights</b> = <b>515.10</b> </li>
          <li> Milan Mercure Solari - <b>2 nights</b> = <b>123.40</b> </li>
          <li> Zurich Ibis Zurich City West(Novotel City West) - <b>6 nights</b> = <b>729.05</b> </li>
          <li> Amsterdam Airbnb in Duivendrecht - <b>11 nights</b> = <b>1271.06</b> </li>
          <li> Ibis Rotterdam City Centre - <b>2 nights</b> = <b>169.75</b> </li>
          <li> Faro Boutique Hotel - <b>2 nights</b> = <b>136.16</b> </li>
          <li> Lisbon Holiday Inn Continental - <b>6 nights</b> = <b>625.19</b> </li>
          <li> Oporto Airbnb - <b>7 nights</b> = <b>327</b> </li>
          <li> Barcelona Airbnb Eixample - <b>77 nights</b> = <b>3541.94</b> </li>
        </ul>
      </P>


      <P>
        The following is a list of apartments I rented as vacation getaways, that is, places that I only visited while I maintained a primary residence elsewhere:
        <ul>
          <li> Palma Mallorca <b>3 nights</b> 2 people Airbnb = <b>163.92</b> </li>
          <li> Ibiza  <b>3 nights</b> Hostal Costa 2 people = <b>197.70</b></li>
          <li> Oviedo Ibis Oviedo <b>2 nights</b> = <b>55.85 </b></li>
          <li> Prague Ibis Wenceslas Square <b>6 nights</b> = <b>254.55</b> </li>
          <li> Paris Ibis Avenue Republique <b>3 nigths</b> = <b>342.42 </b></li>
          <li> Toulouse Pullman Toulouse Centre Ramblas <b>2 nights</b> = <b>225.10 </b></li>
        </ul>
      </P>

      <P>
        It's important to note that through Accor fidelity program I had some discounts through points accumulated which were used in some of these stays.
      </P>

      <P>
        Totals:
        <b>
          <ul>
            <li>Primary residence costs: 14978.89 EUR</li>
            <li>Total of nights in hotels and Airbnbs: 290</li>
            <li>Average cost per night in primary residences: 51,65 EUR</li>
            <li>Getaways costs: 1692.94 EUR</li>
            <li>Total housing costs: 16671.83 EUR</li>
            <li>Total housing costs per night, full year: 45,67</li>
          </ul>
        </b>
      </P>

      <H2>Previous years</H2>

      <P>
        Now to compare to previous years, while I don't have values of all the getaways I could still estimate how much I paid in rent.
      </P>
      <P>
        For 2017 and 2018, I lived in Budapest and paid approximately 210,000 HUF for an apartment with all bills and gym included, which amounted to roughly 7000 EUR/year, Budapest is of course much cheaper than other parts of Europe which is why there's such a difference from values above, this amount was still quite high compared to average Budapest prices due to the building's amenities.
      </P>

      <P>
        In 2019 I moved halfway through the year from Budapest to Stockholm, this represented a significant increase in housing costs, they are follows:
        <ul>
          <li><b>4 months</b> rent in Budapest(Jan - Apr) = <b>2333 EUR</b>(210k HUF/month)</li>
          <li><b>5 months</b> rent in Stockholm in Sodermalm(May - Set) = <b>6777 EUR</b>(14000 SEK/month)</li>
          <li>Apartment deposit in Stockholm: <b>1161 EUR</b>(12000 SEK) </li>
          <li><b>2 months</b> rent in Stockholm in Kungsholmen(Nov - Dec) = <b>2420 EUR</b>(12500 SEK/month)</li>
        </ul>
      </P>
      <P>
        Note: My landlord disputed damages and didn't return my deposit for the first apartment, also, I was out during october to avoid paying rent in Stockholm, all amounts are converted to the current exchange rate, all bills were included in both apartments.
      </P>

      <P>
        <b>
          <ul>
            <li>Total in euros converted: 12691 EUR</li>
            <li>Total housing costs per night, full year(excl getaway stays): 34.77 EUR</li>
          </ul>
        </b>
      </P>

      <P>
        In 2020 I moved from Stockholm to Barcelona, I had to pay extra months due to leaving the contract early and with a short notice, both at the beginning of the year when leaving Stockholm and at the end of the year when leaving my apartment in Barcelona, the full amounts:
      </P>

      <P>
        <ul>
          <li><b>2 months</b> rent in Stockholm in Kungsholmen(Jan - Feb) = <b>2420 EUR</b>(12500 SEK/month)</li>
          <li><b>9 months</b> rent in Barcelona in El Clot(March - November) = <b>8910 EUR</b>(990 EUR/month)</li>
          <li>Approximate bills in Barcelona apartment for 9 months(gas, electricity, water and internet) =  <b>1080 EUR</b>(120/month)</li>
          <li>One time agency fee for apartment contract in Barcelona(10% of annual rent + taxes) = <b>1437.48 EUR</b></li>
        </ul>
      </P>
      <P>
        <b>
          <ul>
            <li> Approximate total in euros converted: 13847.48 EUR</li>
            <li>Total housing costs per night, full year(excl getaway stays): 37.83 EUR</li>
          </ul>
        </b>
      </P>
      <H2>Conclusions</H2>

      <P>
        It's clear my housing costs have gone up as expected, but 2021 was a year of experimenting and seeing how these would add up, I also didn't plan very well and splurged every now and then. I wouldn't recommend anyone who would prefer to keep their costs under a strict budget to not plan and accumulate a series of short stays which will cost more as lots of places will offer good extended stays rates.
      </P>

      <P>
        It's also noticeable that a lot of the places I stayed are generally higher cost, so it is easy to keep the costs down by staying in lower cost of living areas which is something I plan for the upcoming year, which should make it closer to my previous yearly housing costs.
      </P>
    </Post>
  </>
)

export default Article
