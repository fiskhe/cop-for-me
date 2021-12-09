import './css/CountryDataVisual.css'

export default function CountryDataVisual(props) {
    const { NAME, POP_EST } = props.value;
    return (
        <div className="CountryDataVisual">
            <p>{NAME} — {rounded(POP_EST)}</p>
            <div>
                <p><u>Pledged to</u></p>
                <p>End Deforestation: {props.value.END_DEFOREST}</p>
                <p>Quit Coal: {props.value.QUIT_COAL}</p>
                <p>Cut Methane Emissions: {props.value.CUT_METHANE}</p>
                <p>Net Zero Target Date: {props.value.NET_ZERO_TARGET_DATE}</p>
            </div>
        </div>
    );
}

const rounded = num => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + "Bn";
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + "M";
  } else {
    return Math.round(num / 100) / 10 + "K";
  }
};

// setTooltipContent(`${NAME} — ${rounded(POP_EST)}`);
