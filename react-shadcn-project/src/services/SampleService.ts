import { Sample } from '@/interfaces';
import axios from '@/lib/axios';

interface SamplesResponse {
	sample?: Sample;
	samples?: Sample[];
	isSuccess?: boolean;
	errorCode?: string;
}

const getSamples = async (): Promise<SamplesResponse> => {
	const initialResponse: SamplesResponse = {
		samples: [],
	};

	try {
		const { data: apiResponse = [] }: { data: Sample[] } = await axios.get('Sample');

		return { samples: apiResponse };
	} catch (error: unknown) {
		return { ...initialResponse, errorCode: error instanceof Error ? error.message : 'Internal Server Error' };
	}
};

const getSample = async (id: number): Promise<SamplesResponse> => {
	const initialResponse: SamplesResponse = {
		sample: undefined,
	};

	try {
		const { data: apiResponse }: { data: Sample } = await axios.get(`Sample/${id}`);

		return { sample: apiResponse };
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

		return { ...initialResponse, isSuccess: apiResponse && true };
	} catch (error: unknown) {
		return { ...initialResponse, errorCode: error instanceof Error ? error.message : 'Internal Server Error' };
	}
};

const updateSample = async (id: number, payload: Sample): Promise<SamplesResponse> => {
	const initialResponse: SamplesResponse = {
		isSuccess: false,
	};

	try {
		const { data: apiResponse = {} } = await axios.put(`Sample/${id}`, payload);

		return { ...initialResponse, isSuccess: apiResponse && true };
	} catch (error: unknown) {
		return { ...initialResponse, errorCode: error instanceof Error ? error.message : 'Internal Server Error' };
	}
};

const deleteSample = async (id: number): Promise<SamplesResponse> => {
	const initialResponse: SamplesResponse = {
		isSuccess: false,
	};

	try {
		const { data: apiResponse = {} } = await axios.delete(`Sample/${id}`);

		return { ...initialResponse, isSuccess: apiResponse && true };
	} catch (error: unknown) {
		return { ...initialResponse, errorCode: error instanceof Error ? error.message : 'Internal Server Error' };
	}
};

const SampleService = { getSamples, getSample, createSample, updateSample, deleteSample };
export default SampleService;
