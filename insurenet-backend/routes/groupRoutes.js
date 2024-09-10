const express = require('express');
const router = express.Router();
const groupController = require('../controllers/groupController');
const { authMiddleware } = require('../middleware/authMiddleware');

// Create a new group
router.post('/', authMiddleware, groupController.createGroup);

// Get all groups (for admin purposes)
router.get('/', authMiddleware, groupController.getAllGroups);

// Get a specific group by ID
router.get('/:groupId', authMiddleware, groupController.getGroupById);

// Join an existing group
router.post('/:groupId/join', authMiddleware, groupController.joinGroup);

// Leave a group
router.post('/:groupId/leave', authMiddleware, groupController.leaveGroup);

// Update group details
router.put('/:groupId', authMiddleware, groupController.updateGroup);

// Delete a group (admin or group owner only)
router.delete('/:groupId', authMiddleware, groupController.deleteGroup);

// Get group members
router.get('/:groupId/members', authMiddleware, groupController.getGroupMembers);

// Add a member to the group (admin or group owner only)
router.post('/:groupId/members', authMiddleware, groupController.addGroupMember);

// Remove a member from the group (admin or group owner only)
router.delete('/:groupId/members/:memberId', authMiddleware, groupController.removeGroupMember);

// Get group statistics
router.get('/:groupId/stats', authMiddleware, groupController.getGroupStats);

module.exports = router;