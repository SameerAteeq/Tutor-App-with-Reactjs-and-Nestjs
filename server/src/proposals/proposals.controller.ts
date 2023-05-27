import {
  Body,
  Controller,
  Post,
  Req,
  UseGuards,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ProposalsService } from './proposals.service';
import { createProposalDto } from './dto/create-proposal';
import { Proposal } from './schema/proposals.schema';
import { UpdateProposalDto } from './dto/update-proposal';

@Controller('proposals')
export class ProposalsController {
  constructor(private readonly proposalService: ProposalsService) {}

  @Post('/uploadProposal')
  @UseGuards(AuthGuard())
  async createStudentPost(
    @Body() proposal: createProposalDto,
    @Req() req,
  ): Promise<Proposal> {
    return this.proposalService.sendProposal(proposal, req.user);
  }

  @Get('/getAllProposals')
  async getAllProposalsAdmin(): Promise<Proposal[]> {
    return this.proposalService.getAllProposalByAdmin();
  }

  @Get(':id')
  async getPosts(@Param('id') postId: string): Promise<Proposal[]> {
    return this.proposalService.getProposals(postId);
  }

  @Get('/tutor/:tutorId')
  async getUserPost(@Param('tutorId') tutor: string): Promise<Proposal[]> {
    return this.proposalService.getProposalByUser(tutor);
  }

  @Get('/my-proposals/:status')
  @UseGuards(AuthGuard())
  async getMyStudents(
    @Param('status') status: string,
    @Req() req,
  ): Promise<Proposal[]> {
    return this.proposalService.getMyProposals(status, req.user);
  }

  @Put('/update')
  async updatePost(@Body() proposal: UpdateProposalDto): Promise<Proposal> {
    return this.proposalService.manageProposal(
      proposal.proposalId,
      proposal.status,
    );
  }

  @Delete('/delete/:id')
  async deleteBook(@Param('id') id: string) {
    await this.proposalService.deletById(id);
  }
}
