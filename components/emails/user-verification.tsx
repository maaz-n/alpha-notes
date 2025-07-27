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

interface VerificationEmailProps {
    userEmail: string,
    verificationUrl: string
}

const VerificationEmail = ({userEmail, verificationUrl}: VerificationEmailProps) => {

  return (
    <Html lang="en" dir="ltr">
      <Tailwind>
        <Head />
        <Preview>Verify your email address to complete your account setup</Preview>
        <Body className="bg-gray-100 font-sans py-[40px]">
          <Container className="bg-white rounded-[8px] shadow-sm max-w-[600px] mx-auto p-[40px]">
            {/* Header */}
            <Section>
              <Heading className="text-[28px] font-bold text-gray-900 mb-[24px] text-center">
                Verify Your Email Address
              </Heading>
            </Section>

            {/* Main Content */}
            <Section>
              <Text className="text-[16px] text-gray-700 mb-[20px] leading-[24px]">
                Hi there,
              </Text>
              
              <Text className="text-[16px] text-gray-700 mb-[20px] leading-[24px]">
                Thanks for signing up! To complete your account setup and start using our services, please verify your email address by clicking the button below.
              </Text>

              <Text className="text-[16px] text-gray-700 mb-[32px] leading-[24px]">
                We received a request to verify the email address <strong>{userEmail}</strong> for your account.
              </Text>
            </Section>

            {/* Verification Button */}
            <Section className="text-center mb-[32px]">
              <Button
                href={verificationUrl}
                className="bg-blue-600 text-white px-[32px] py-[16px] rounded-[8px] text-[16px] font-semibold no-underline box-border"
              >
                Verify Email Address
              </Button>
            </Section>

            {/* Alternative Link */}
            <Section>
              <Text className="text-[14px] text-gray-600 mb-[20px] leading-[20px]">
                If the button above doesn&aspo;t work, you can also verify your email by copying and pasting this link into your browser:
              </Text>
              
              <Text className="text-[14px] text-blue-600 mb-[32px] break-all">
                <Link href={verificationUrl} className="text-blue-600 underline">
                  {verificationUrl}
                </Link>
              </Text>
            </Section>

            {/* Security Notice */}
            <Section className="border-t border-gray-200 pt-[24px]">
              <Text className="text-[14px] text-gray-600 mb-[16px] leading-[20px]">
                <strong>Security Notice:</strong> This verification link will expire in 24 hours for your security. If you didn&aspo;t create an account, you can safely ignore this email.
              </Text>
              
              <Text className="text-[14px] text-gray-600 mb-[24px] leading-[20px]">
                If you have any questions or need assistance, please don&aspo;t hesitate to contact our support team.
              </Text>

              <Text className="text-[16px] text-gray-700 mb-[8px]">
                Best regards,
              </Text>
              <Text className="text-[16px] text-gray-700 font-semibold">
                AlphaNotes
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
                <Link href="#" className="text-gray-500 underline">Unsubscribe</Link> | 
                <Link href="#" className="text-gray-500 underline ml-[8px]">Privacy Policy</Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default VerificationEmail;