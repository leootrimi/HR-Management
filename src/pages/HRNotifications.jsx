import React, { useState } from 'react';
import { Box, Button, Text, VStack, HStack, Input, Heading, Divider, SimpleGrid } from '@chakra-ui/react';
import './HRNotifications.css';

const HRNotifications = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'Request for leave approval from John Doe.' },
    { id: 2, message: 'Salary raise request from Jane Smith.' },
    { id: 3, message: 'Request for remote work from Bob Johnson.' }
  ]);

  const [approved, setApproved] = useState([]);
  const [declined, setDeclined] = useState([]);
  const [replied, setReplied] = useState([]);
  const [reply, setReply] = useState("");

  const handleApprove = (id) => {
    const notification = notifications.find(n => n.id === id);
    setApproved([...approved, notification]);
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const handleDecline = (id) => {
    const notification = notifications.find(n => n.id === id);
    setDeclined([...declined, notification]);
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const handleReply = (id) => {
    const notification = notifications.find(n => n.id === id);
    setReplied([...replied, { ...notification, reply }]);
    setNotifications(notifications.filter(n => n.id !== id));
    setReply("");
  };

  return (
    <Box p={6} className="container">
      <Heading className='heading' as="h2">HR Notifications</Heading>

      {/* Summary Section */}
      <SimpleGrid columns={4} spacing={4} className="summary-section">
        <Box p={4} shadow="md" borderWidth="1px" borderRadius="md" className="summary-box">
          <Text fontSize="lg" fontWeight="bold">Pending</Text>
          <Text fontSize="2xl">{notifications.length}</Text>
        </Box>
        <Box p={4} shadow="md" borderWidth="1px" borderRadius="md" className="summary-box">
          <Text fontSize="lg" fontWeight="bold">Approved</Text>
          <Text fontSize="2xl">{approved.length}</Text>
        </Box>
        <Box p={4} shadow="md" borderWidth="1px" borderRadius="md" className="summary-box">
          <Text fontSize="lg" fontWeight="bold">Declined</Text>
          <Text fontSize="2xl">{declined.length}</Text>
        </Box>
        <Box p={4} shadow="md" borderWidth="1px" borderRadius="md" className="summary-box">
          <Text fontSize="lg" fontWeight="bold">Replied</Text>
          <Text fontSize="2xl">{replied.length}</Text>
        </Box>
      </SimpleGrid>

      <div className="notification-section">
        <Box className="left-box">
          <Heading as="h3" size="md" mt={4}>Pending Requests</Heading>
          <Divider />
          <VStack spacing={4} align="stretch">
            {notifications.map(notification => (
              <Box key={notification.id} p={4} shadow="md" borderWidth="1px" borderRadius="md" className="notification-box">
                <Text>{notification.message}</Text>
                <HStack spacing={4} mt={4}>
                  <Button className='buttoni1' colorScheme="green" onClick={() => handleApprove(notification.id)}>Approve</Button>
                  <Button className='buttoni2' colorScheme="red" onClick={() => handleDecline(notification.id)}>Decline</Button>
                  <Input
                    placeholder="Type your reply"
                    value={reply}
                    onChange={(e) => setReply(e.target.value)}
                  />
                  <Button className='buttoni3' colorScheme="blue" onClick={() => handleReply(notification.id)}>Reply</Button>
                </HStack>
              </Box>
            ))}
          </VStack>
        </Box>

        <Box className="right-box">
          <Box mb={6}>
            <Heading as="h3" size="md">Approved Requests</Heading>
            <Divider />
            <VStack spacing={4} align="stretch">
              {approved.map(notification => (
                <Box key={notification.id} p={4} shadow="md" borderWidth="1px" borderRadius="md" className="notification-box">
                  <Text>{notification.message}</Text>
                </Box>
              ))}
            </VStack>
          </Box>

          <Box mb={6}>
            <Heading as="h3" size="md">Declined Requests</Heading>
            <Divider />
            <VStack spacing={4} align="stretch">
              {declined.map(notification => (
                <Box key={notification.id} p={4} shadow="md" borderWidth="1px" borderRadius="md" className="notification-box">
                  <Text>{notification.message}</Text>
                </Box>
              ))}
            </VStack>
          </Box>

          <Box>
            <Heading as="h3" size="md">Replied Requests</Heading>
            <Divider />
            <VStack spacing={4} align="stretch">
              {replied.map(notification => (
                <Box key={notification.id} p={4} shadow="md" borderWidth="1px" borderRadius="md" className="notification-box">
                  <Text>{notification.message}</Text>
                  <Text mt={2}><strong>Reply:</strong> {notification.reply}</Text>
                </Box>
              ))}
            </VStack>
          </Box>
        </Box>
      </div>
    </Box>
  );
};

export default HRNotifications;
