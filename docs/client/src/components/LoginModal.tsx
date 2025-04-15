import { useState } from 'react';
import { X } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

interface LoginModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
}

const loginSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
  rememberMe: z.boolean().optional(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const LoginModal = ({ isOpen, onOpenChange, onSuccess }: LoginModalProps) => {
  const [isSignUp, setIsSignUp] = useState(false);
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
    onSuccess();
    onOpenChange(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="bg-black bg-opacity-90 border-gray-800 text-white sm:max-w-md">
        <DialogClose className="absolute right-4 top-4 text-gray-400 hover:text-white">
          <X className="h-4 w-4" />
        </DialogClose>
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold">
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            {isSignUp 
              ? 'Create your account to start watching' 
              : 'Enter your credentials to access your account'}
          </DialogDescription>
        </DialogHeader>
        
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
                  <FormMessage />
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
                  <FormMessage />
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
                      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Remember me
                      </label>
                    </FormItem>
                  )}
                />
              </div>
              <a href="#" className="hover:underline">Need help?</a>
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
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
