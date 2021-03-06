import React from 'react';
import './main.css';
import './scentheme.css';
import warm_earth from './warm_earth.jpg';

export default function Scenarios() {
    return (
<body>
<h1>
    Visualizing Climate Scenarios
</h1>

<div class="div1">
    <h2>
        A Warming Earth
    </h2>
    <p>
        The <strong><a href="https://climate.nasa.gov/scientific-consensus/">global scientific community is virtually
        undivided</a></strong> when it comes to answering the question of whether the Earth is warming –
        the answer is a resounding yes. In 2020, the average surface temperature of Earth was 2.14˚F (1.19 °C) warmer
        than
        pre-industrial averages and 1.76 °F (0.98 °C) warmer than the 20th century average. 2020 isn’t the warmest year
        in
        recorded history, as that title belongs to 2016. However, year-to-year fluctuations cannot hide the <strong>alarming
        upward trajectory</strong> of the global temperature average, and its rising is only accelerating in pace.

    </p>

    <a href="https://www.climate.gov/news-features/understanding-climate/climate-change-global-temperature"><img
            src={warm_earth} alt="Global Temperature Average" style={{width: '400px', height: '400px'}} class="center" /></a>
</div>

<div class="clearfix">
    <a href="https://archive.ipcc.ch/publications_and_data/ar4/wg1/en/figure-9-5.html">
        <img src="https://archive.ipcc.ch/publications_and_data/ar4/wg1/en/fig/figure-9-5-l.png"
             alt="Climate Models with and without Anthropogenic Forcings"
             style={{height: '450px', width: '300px', float: 'right', margin: '16px'}}
             class="center"/></a>
    <h2>
        Anthropogenic Forcings
    </h2>
    <p>
        How do we know that the currently seen warming temperatures are human-caused rather than due to natural
        fluctuations
        in the world’s climate? One tool used by scientists to explore the causes of global warming is the production of <strong>counterfactual</strong> 
        climate
        scenarios. These scenarios run simulations of what the state of the world would be if human activities (such as
        manufacturing and transportation) were not included as variables. As can be seen to the right, the models that
        do
        not include anthropogenic factors are incapable of accurately predicting the observed climate we are seeing
        today.
        <br></br>
        The top graph shows the average climate model ran with both anthropogenic and natural forcings in red, while the
        bottom graph shows the average climate model ran with only natural forcings in dark blue. In both graphs, the
        black line
        indicates the actual, observed global temperature average over time. Clearly, only the models that do include
        human activity
        can accurately predict the observed temperature and its steep rising.
        <br></br>
        For more information on how we can be confident that global warming is human induced, check out <a
            href="https://www.nytimes.com/article/climate-change-global-warming-faq.html">this</a> comprehensive
        article.
    </p>
</div>

<div class="div1">
    <h2>
        Future Climate Projections
    </h2>
    <p>
        Before <strong><a href="intro.html">COP26</a></strong>, 143 of the Paris Agreement’s Parties officially updated
        their
        Nationally Determined Contributions
        (NDCs), which represent the degree to which a country pledges to reduce its greenhouse gas (GHG) emissions. The
        goal
        of the Paris Agreement is for each party to submit increasingly ambitious NDCs, which is largely the case. The
        graph
        below shows the initial NDCs set in 2016 in gray and the newly updated NDCs in blue. The new NDCs are more
        ambitious
        than those set in 2016, but they still indicate an increase in carbon emissions compared to historical averages
        in
        1990, 2005, 2010, and other years.
    </p>

    <a href="https://unfccc.int/process-and-meetings/the-paris-agreement/nationally-determined-contributions-ndcs/nationally-determined-contributions-ndcs/ndc-synthesis-report#eq-5">
        <img src="https://unfccc.int/sites/default/files/2021-09/Fig3_PercentageAbovePast_15Sept.jpg"
             alt="Pledges for 2030 Emissions"
             style={{height: '300px', width: 'auto'}}
             class="center"/>
    </a>

    <p>
        Even after COP26, current pledges are still not enough to meet the <a
            href="https://unfccc.int/sites/default/files/english_paris_agreement.pdf">Agreement’s</a> broad goal of
        keeping global
        warming 
        <strong>“well below 2 °C above pre-industrial levels,”</strong> much less meet the Agreement’s more ambitious
        vision
        of limiting
        temperature increases <strong>“to 1.5 °C above pre-industrial levels.”</strong> Because climate modelers cannot
        say
        for certain what
        the exact temperature outcome of current or future NDCs will be, the IPCC has established ranges of scenarios
        that
        vary from best case to worst case. Here is a visualization of these scenarios from the most recent <strong><a
            href="https://unfccc.int/process-and-meetings/the-paris-agreement/nationally-determined-contributions-ndcs/nationally-determined-contributions-ndcs/ndc-synthesis-report">NDC
        Synthesis
        Report</a>:</strong>
    </p>

    <a href="https://unfccc.int/process-and-meetings/the-paris-agreement/nationally-determined-contributions-ndcs/nationally-determined-contributions-ndcs/ndc-synthesis-report#eq-5">
        <img src="https://unfccc.int/sites/default/files/2021-09/Fig7_NDC4Scencomparison_15Sep_0.jpg"
             alt="Projected Emission Scenarios"
             height={300 + 'px'} width={'auto'} class="center"/></a>

    <p>
        This graph shows the amount of emissions that are permissible in order to be compliant with various climate
        scenarios.
        The lowest, teal line labeled “below 1.5 °C” shows that we may need to be carbon negative by 2060 in order to
        achieve
        this goal. To be carbon negative means that humans must take in more carbon than they emit at the aggregate
        level.
        This scenario also requires rapid decreases in emissions beginning <u>now</u>. The other scenarios,
        “1.5
        °C
        with limited
        overshoot” and “lower 2 °C” do not require us to be GHG negative according to current climate models. However,
        they
        also are more likely to occur only if emissions decrease by 2030. Finally, the red line labeled “NDCs” at the
        top
        indicates the projected emissions if all Parties to the Agreement meet their emission reduction targets.
    </p>

    <p>
        In order to be compliant with the Paris Agreement’s goal of 1.5 °C, GHG emissions in 2030 should be about 45% <strong>lower</strong> than 
        those in 2010. However, the new NDCs still lead to a projected 15.9% <strong>increase</strong> in GHG
        emissions
        in 2030 compared
        to 2010. Clearly, the Earth is in dire need of more ambitious NDCs and legally powerful, rather than merely
        symbolic,
        policy actions by key stakeholders, those with the power and responsibility to enact change in developed
        countries’
        energy structures.
    </p>
</div>

<h2>
    Resources for Climate Action
</h2>
<p>
    The purpose of this site is to provide education on climate change and the role of the UN in global mitigation
    efforts, but we have included some additional resources for how you might begin to take personal climate action
    below.
<table>
    <tr>
        <td>
            <a href="https://www.imperial.ac.uk/stories/climate-action/">Actionable Steps</a>
        </td>
        <td>
            <a href="https://350.org/get-involved/">350.org</a>
        </td>
        <td>
            <a
                    href="https://citizensclimatelobby.org/?gclid=Cj0KCQiAy4eNBhCaARIsAFDVtI0JtPiRU84E4g0w2M0qghzwC5zPIxVD-0Z-kzpRsgjwknzoN5BECN0aAjUKEALw_wcB">
                Citizens' Climate Lobby</a>
        </td>
        <td>
            <a href="https://foodtank.com/news/2020/10/36-organizations-helping-solve-the-climate-crisis/">36 Climate
                Organizations</a>
        </td>
    </tr>
</table>
</p>

</body>

);
}
