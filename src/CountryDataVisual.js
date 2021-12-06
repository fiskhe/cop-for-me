export default function CountryDataVisual(props) {
    const { NAME, POP_EST } = props.value;
    return (
        <p>{NAME} — {rounded(POP_EST)}</p>
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
