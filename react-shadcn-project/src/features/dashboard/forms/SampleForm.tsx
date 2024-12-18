import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

const SampleForm = () => {
	const [sampleInfo, setSampleInfo] = useState({
		name: '',
		mobile: '',
		email: '',
	});

	const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		setSampleInfo((prevState) => ({ ...prevState, [name]: value }));
	};

	return (
		<div>
			<div className='grid gap-6'>
				<div className='grid gap-6'>
					<div className='grid gap-2'>
						<Label htmlFor='name'>Name</Label>
						<Input
							id='name'
							name='name'
							placeholder='Enter your name'
							required
							value={sampleInfo.name}
							onChange={handleOnChange}
						/>
					</div>
					<div className='grid gap-2'>
						<Label htmlFor='mobile'>Mobile</Label>
						<Input
							id='mobile'
							name='mobile'
							placeholder='Enter your mobile'
							required
							value={sampleInfo.mobile}
							onChange={handleOnChange}
						/>
					</div>
					<div className='grid gap-2'>
						<Label htmlFor='email'>Email</Label>
						<Input
							id='email'
							name='email'
							type='email'
							placeholder='Enter your email'
							required
							value={sampleInfo.email}
							onChange={handleOnChange}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SampleForm;
