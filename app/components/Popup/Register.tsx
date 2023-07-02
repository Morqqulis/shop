'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';

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

const formDataValues = {
	name: '',
	surname: '',
	email: '',
	tel: '',
	pass: '',
	passConfirm: '',
};

const FormInput: React.FC<FormInputProps> = ({ label, id, name, type, placeholder, value, onChange, error }) => (
	<div className="popup__inputs">
		<label className="popup__label" htmlFor={id}>
			{label}
		</label>
		<input className={`popup__input ${error ? 'popup__input_error' : ''}`} type={type} id={id} name={name} placeholder={placeholder} value={value} onChange={onChange} />
		{error && <span className="popup__error">{error}</span>}
	</div>
);

const Register: React.FC = () => {
	const [formData, setFormData] = useState(formDataValues);

	const [formErrors, setFormErrors] = useState<FormErrors>(formDataValues);

	const isFormEmpty = Object.values(formData).every((value) => value === '');

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		// Валидация и отправка данных
		// ...
		try {
			const response = await axios.post('../../data/users.json', JSON.stringify(formData));
			setFormData(response.data);
			console.log(response.data);
		} catch (error) {
			console.error('Косяк', error);
		}
	};

	const handleReset = () => {
		setFormData(formDataValues);
	};

	return (
		<div className="popup">
			<form className="popup__form" onSubmit={handleSubmit}>
				<FormInput label="Имя" id="nameInput" name="name" type="text" placeholder="Имя" value={formData.name} onChange={handleInputChange} error={formErrors.name} />
				<FormInput label="Фамилия" id="surnameInput" name="surname" type="text" placeholder="Фамилия" value={formData.surname} onChange={handleInputChange} error={formErrors.surname} />
				<FormInput label="Эмейл" id="emailInput" name="email" type="email" placeholder="Эмейл" value={formData.email} onChange={handleInputChange} error={formErrors.email} />
				<FormInput label="Телефон" id="telInput" name="tel" type="tel" placeholder="Телефон" value={formData.tel} onChange={handleInputChange} error={formErrors.tel} />
				<FormInput label="Пароль" id="passInput" name="pass" type="password" placeholder="Пароль" value={formData.pass} onChange={handleInputChange} error={formErrors.pass} />
				<FormInput label="Повторите пароль" id="passConfirmInput" name="passConfirm" type="password" placeholder="Повторите пароль" value={formData.passConfirm} onChange={handleInputChange} error={formErrors.passConfirm} />
				<div className="popup__buttons">
					<button className="popup__btn btn" type="submit" disabled={isFormEmpty}>
						Зарегистрироваться
					</button>
					<button className="popup__btn btn" type="reset" disabled={isFormEmpty} onClick={handleReset}>
						Сбросить
					</button>
				</div>
			</form>
		</div>
	);
};

export default Register;
