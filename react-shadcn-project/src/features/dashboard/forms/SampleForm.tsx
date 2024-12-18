import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { OPERATION_MODE } from '@/constants/enums';
import { Sample } from '@/interfaces';

interface SampleFormProps {
	sampleInfo: Sample;
	setSampleInfo: React.Dispatch<React.SetStateAction<Sample>>;
	mode: number;
}

const SampleForm = ({ sampleInfo, setSampleInfo, mode }: SampleFormProps) => {
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
						<Input id='name' name='name' placeholder='Enter your name' required value={sampleInfo.name} disabled={mode === OPERATION_MODE.View} onChange={handleOnChange} />
					</div>
					<div className='grid gap-2'>
						<Label htmlFor='mobile'>Mobile</Label>
						<Input id='mobile' name='mobile' placeholder='Enter your mobile' required value={sampleInfo.mobile} disabled={mode === OPERATION_MODE.View} onChange={handleOnChange} />
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
							disabled={mode === OPERATION_MODE.View}
							onChange={handleOnChange}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SampleForm;
