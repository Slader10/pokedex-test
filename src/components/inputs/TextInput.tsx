import React from "react"

interface TextInputInterface {
    label?: string;
    icon?: JSX.Element,
    hideLabel?: boolean,
    onChange(x: string): void
}

const TextInput = ({ label, icon, hideLabel, onChange }: TextInputInterface) => {
    return <div className="input-group">
        {!hideLabel && <label className="input-label">{label}</label>}
        <div className="input-container border-grey">
            {icon}
            <input placeholder={label}
                className="input-text"
                onChange={x => onChange(x.target.value)}
            />
        </div>
    </div>
}

export default TextInput