// this file is auto-generated
import type { RequestHandler as GenericRequestHandler, ResponseBody, Load as GenericLoad } from '@sveltejs/kit';

export type RequestHandler<Output = ResponseBody> = GenericRequestHandler<{ id: string }, Output>;

export type Load<
	InputProps extends Record<string, any> = Record<string, any>,
	OutputProps extends Record<string, any> = InputProps
> = GenericLoad<{ id: string }, InputProps, OutputProps>;