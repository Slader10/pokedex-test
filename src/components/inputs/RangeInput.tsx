import InputSlider from "react-input-slider";

const maxValue = 100

interface RangeInputInterface {
    label?: string;
    value: number,
    onChange(value: number): void
}

const RangeInput = ({ label, value, onChange }: RangeInputInterface) => {
    return <div className="flex align-center justify-center gap-1">
        <label>{label}: 0</label>
        <InputSlider axis="x" xmin={0}
            xmax={maxValue} xstep={1}
            x={value}
            onChange={({ x }) => onChange(x)}
        />
        <div>{maxValue}</div>
    </div>
}

export default RangeInput