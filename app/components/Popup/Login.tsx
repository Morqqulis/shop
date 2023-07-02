'use client';
import { useState } from 'react';

type FormErrors = {
	[key: string]: string;
};

type FormInputProps = {
	label: string;
	id: string;
	name: string;
	type: string;
	placeholder: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	error: string;
};

const FormInput: React.FC<FormInputProps> = ({ label, id, name, type, placeholder, value, onChange, error }) => (
	<div className="popup__input-container">
		<label className="popup__label" htmlFor={id}>
			{label}
		</label>
		<input className={`popup__input ${error ? 'popup__input--error' : ''}`} type={type} id={id} name={name} placeholder={placeholder} value={value} onChange={onChange} />
		{error && <span className="popup__error">{error}</span>}
	</div>
);

const Login: React.FC = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const [formErrors, setFormErrors] = useState<FormErrors>({
		email: '',
		password: '',
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Валидация и обработка входа пользователя
		// ...
	};

	return (
		<div className="popup">
			<form className="popup__form" onSubmit={handleSubmit}>
				<FormInput label="Эмейл" id="emailInput" name="email" type="email" placeholder="Эмейл" value={formData.email} onChange={handleInputChange} error={formErrors.email} />
				<FormInput label="Пароль" id="passwordInput" name="password" type="password" placeholder="Пароль" value={formData.password} onChange={handleInputChange} error={formErrors.password} />
				<div className="popup__buttons">
					<button className="popup__btn btn" type="submit">
						Войти
					</button>
				</div>
			</form>
		</div>
	);
};

export default Login;
