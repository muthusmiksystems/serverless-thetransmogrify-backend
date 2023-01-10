const BaseController = require("../../common/controllers/base.controller");
const userRepository = require("../repository/user.repository");
const userDto = require("../middleware/user.dto");
const responseService = require("../../common/services/response.service");
 

class UserController extends BaseController {
  constructor(respService, repository, dto) {
    super(respService, repository, dto);
    this.repository = repository;
    this.roleCreate = this.roleCreate.bind(this);
  }

  async roleCreate(req) {
    try {
      let success = false;

      const roleCreateDto = this.dto.roleCreateDto(req.body);

      const record = await this.repository.createRoles(roleCreateDto);

      return { success: !success, data: record };
    } catch (e) {
      return { e };
    }
  }

  async updateUserRole(req) {
    try {
      let success = false;

      const updateRoleDto = this.dto.updateRole(req.body);

      const updateRole = await this.repository.updateRoles(
        req.user.id,
        updateRoleDto
      );

      return { success: !success, data: updateRole };
    } catch (e) {
      console.log(e);
    }
  }

  async profileUpdate(req) {
    try {
      let success = false;
      const updateProfileDto = this.dto.updateProfileDto(req.body);

      const updateProfile = await this.repository.updateProfile(
        req.user.id,
        updateProfileDto
      );

      return { success: !success, data: updateProfile };
    } catch (e) {
      console.log(e);
      return e;
    }
  }

  async getProfile(req) {
    try {
      let success = false;
      let userId = req.user.id;
      const getProfile = await this.repository.getUserProfiles(userId);
      return { success: !success, data: getProfile };
    } catch (e) {
      return e;
    }
  }

  async getRoles(req) {
    try {
      let success = false;

      const roles = await this.repository.getRoles();

      return { success: !success, data: roles };
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new UserController(responseService, userRepository, userDto);
