import { Metadata } from 'next';
import { redirect } from 'next/navigation';

import { auth } from '@/auth';
import Card from '@/components/ui/card';
import CardTitle from '@/components/ui/cardTitle';
import CardHeader from '@/components/ui/cardHeader';
import CardContent from '@/components/ui/cardContent';

import SignUpForm from './signup-form';

export const metadata: Metadata = {
  title: 'Sign Up',
};

export default async function SignUpPage(props: {
  searchParams: Promise<{
    callbackUrl: string;
  }>;
}) {
  const searchParams = await props.searchParams;

  const { callbackUrl } = searchParams;

  const session = await auth();
  if (session) {
    return redirect(callbackUrl || '/');
  }

  return (
    <div className='w-full'>
      <Card>
        <CardHeader>
          <CardTitle className='text-2xl'>Create account</CardTitle>
        </CardHeader>
        <CardContent>
          <SignUpForm />
        </CardContent>
      </Card>
    </div>
  );
}
