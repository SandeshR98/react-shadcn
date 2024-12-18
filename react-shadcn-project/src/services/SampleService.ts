import { Sample } from '@/interfaces';
import axios from '@/lib/axios';

interface SamplesResponse {
	Samples?: Sample[];
	isSuccess?: boolean;
	errorCode?: string;
}

const getSamples = async (): Promise<SamplesResponse> => {
	const initialResponse: SamplesResponse = {
		Samples: [],
	};

	try {
		const { data: apiResponse = [] }: { data: Sample[] } = await axios.get('Sample');

		return { Samples: apiResponse };
	} catch (error: unknown) {
		return { ...initialResponse, errorCode: error instanceof Error ? error.message : 'Internal Server Error' };
	}
};

const createSample = async (payload: Sample): Promise<SamplesResponse> => {
	const initialResponse: SamplesResponse = {
		isSuccess: false,
	};

	try {
		const { data: apiResponse = {} } = await axios.post('Sample', payload);

		console.log(apiResponse);

		return { ...initialResponse, ...apiResponse };
	} catch (error: unknown) {
		return { ...initialResponse, errorCode: error instanceof Error ? error.message : 'Internal Server Error' };
	}
};

const SampleService = { getSamples, createSample };
export default SampleService;
