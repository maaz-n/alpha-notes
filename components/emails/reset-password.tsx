import * as React from 'react';
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
} from '@react-email/components';

interface PasswordResetEmailProps {
    email: string,
    resetUrl: string,
    requestTime: string
}

const PasswordResetEmail = ({email, resetUrl}: PasswordResetEmailProps) => {

  return (
    <Html lang="en" dir="ltr">
      <Tailwind>
        <Head />
        <Preview>Reset your password - Action required</Preview>
        <Body className="bg-gray-100 font-sans py-[40px]">
          <Container className="bg-white rounded-[8px] shadow-sm max-w-[600px] mx-auto p-[40px]">
            {/* Header */}
            <Section>
              <Heading className="text-[28px] font-bold text-gray-900 mb-[24px] text-center">
                Reset Your Password
              </Heading>
            </Section>

            {/* Main Content */}
            <Section>
              
              <Text className="text-[16px] text-gray-700 mb-[20px] leading-[24px]">
                We received a request to reset the password for your account associated with <strong>{email}</strong>.
              </Text>

              <Text className="text-[16px] text-gray-700 mb-[32px] leading-[24px]">
                Click the button below to create a new password. This link is secure and will expire in 1 hour for your protection.
              </Text>
            </Section>

            {/* Reset Button */}
            <Section className="text-center mb-[32px]">
              <Button
                href={resetUrl}
                className="bg-red-600 text-white px-[32px] py-[16px] rounded-[8px] text-[16px] font-semibold no-underline box-border"
              >
                Reset My Password
              </Button>
            </Section>

            {/* Alternative Link */}
            <Section>
              <Text className="text-[14px] text-gray-600 mb-[20px] leading-[20px]">
                If the button above doesn&apos;t work, you can also reset your password by copying and pasting this link into your browser:
              </Text>
              
              <Text className="text-[14px] text-blue-600 mb-[32px] break-all">
                <Link href={resetUrl} className="text-blue-600 underline">
                  {resetUrl}
                </Link>
              </Text>
            </Section>

            {/* Security Notice */}
            <Section className="bg-yellow-50 border border-yellow-200 rounded-[8px] p-[20px] mb-[32px]">
              <Text className="text-[14px] text-yellow-800 mb-[12px] leading-[20px] font-semibold">
                🔒 Security Notice
              </Text>
              <Text className="text-[14px] text-yellow-700 mb-[8px] leading-[20px]">
                • This password reset link will expire in <strong>1 hour</strong>
              </Text>
              <Text className="text-[14px] text-yellow-700 mb-[8px] leading-[20px]">
                • If you didn&apos;t request this reset, please ignore this email
              </Text>
              <Text className="text-[14px] text-yellow-700 leading-[20px]">
                • Your current password remains unchanged until you create a new one
              </Text>
            </Section>

            {/* Additional Help */}
            <Section>
              <Text className="text-[14px] text-gray-600 mb-[20px] leading-[20px]">
                <strong>Didn&apos;t request this password reset?</strong> Your account is still secure. Someone may have entered your email address by mistake. You can safely ignore this email.
              </Text>
              
              <Text className="text-[14px] text-gray-600 mb-[24px] leading-[20px]">
                If you&apos;re having trouble or have security concerns, please contact our support team immediately.
              </Text>

              <Text className="text-[16px] text-gray-700 mb-[8px]">
                Best regards,
              </Text>
              <Text className="text-[16px] text-gray-700 font-semibold">
                The AlphaNotes Security Team
              </Text>
            </Section>

            {/* Footer */}
            <Section className="border-t border-gray-200 pt-[24px] mt-[40px]">
              <Text className="text-[12px] text-gray-500 text-center mb-[8px] m-0">
                © 2025 AlphaNotes. All rights reserved.
              </Text>
              <Text className="text-[12px] text-gray-500 text-center mb-[8px] m-0">
                123 Business Street, Suite 100, Islamabad, Pakistan
              </Text>
              <Text className="text-[12px] text-gray-500 text-center m-0">
                <Link href="#" className="text-gray-500 underline">Contact Support</Link> | 
                <Link href="#" className="text-gray-500 underline ml-[8px]">Privacy Policy</Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};


export default PasswordResetEmail;