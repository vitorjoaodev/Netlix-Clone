import { useState } from 'react';
import { useLocation } from 'wouter';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';

const loginSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
  rememberMe: z.boolean().optional(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    console.log('Form submitted:', data);
    toast({
      title: isSignUp ? 'Account created!' : 'Signed in successfully!',
      description: isSignUp 
        ? 'Welcome to Netflix!' 
        : 'Welcome back to Netflix!',
    });
    setLocation('/');
  };

  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      
      <header className="relative z-10 px-4 py-6">
        <div className="container mx-auto">
          <button onClick={() => setLocation('/')} className="text-[#E50914] font-bold text-4xl">NETFLIX</button>
        </div>
      </header>
      
      <main className="relative z-10 flex items-center justify-center py-10">
        <div className="bg-black bg-opacity-80 p-8 rounded-md w-full max-w-md mx-4">
          <h2 className="text-3xl font-bold mb-6 text-white">
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </h2>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input 
                        placeholder="Email or phone number" 
                        className="w-full p-4 rounded bg-gray-800 text-white border-gray-700"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage className="text-[#E50914]" />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input 
                        type="password" 
                        placeholder="Password" 
                        className="w-full p-4 rounded bg-gray-800 text-white border-gray-700"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage className="text-[#E50914]" />
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                className="w-full bg-[#E50914] text-white py-3 rounded font-medium hover:bg-opacity-90 transition"
              >
                {isSignUp ? 'Sign Up' : 'Sign In'}
              </Button>
              
              <div className="flex items-center justify-between text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <FormField
                    control={form.control}
                    name="rememberMe"
                    render={({ field }) => (
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <Checkbox 
                            checked={field.value} 
                            onCheckedChange={field.onChange} 
                          />
                        </FormControl>
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-400">
                          Remember me
                        </label>
                      </FormItem>
                    )}
                  />
                </div>
                <a href="#" className="hover:underline text-gray-400">Need help?</a>
              </div>
              
              <div className="text-gray-400 text-sm pt-4">
                <p className="mb-4">
                  {isSignUp ? 'Already have an account?' : 'New to Netflix?'}{' '}
                  <Button 
                    variant="link" 
                    className="text-white p-0 hover:underline"
                    onClick={() => setIsSignUp(!isSignUp)}
                  >
                    {isSignUp ? 'Sign in now' : 'Sign up now'}
                  </Button>
                </p>
                <p className="text-xs">
                  This page is protected by Google reCAPTCHA to ensure you're not a bot.{' '}
                  <a href="#" className="text-blue-500 hover:underline">Learn more</a>.
                </p>
              </div>
            </form>
          </Form>
        </div>
      </main>
    </div>
  );
};

export default Login;
