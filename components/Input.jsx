export default function Input({ label, id, value, onChange, type }) {
    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">
                {label}
            </label>
            <input
                id={id}
                type={type || "text"}
                value={value}
                onChange={onChange}
                className="form-control"
            />
        </div>
    );
}
