import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../auth/schemas/user.schema';
import * as mongoose from 'mongoose';
import { Proposal } from './schema/proposals.schema';

@Injectable()
export class ProposalsService {
  constructor(
    @InjectModel(Proposal.name)
    private proposalModel: mongoose.Model<Proposal>,
  ) {}

  //Create post
  async sendProposal(proposal: Proposal, user: User): Promise<Proposal> {
    const data = Object.assign(proposal, {
      tutor: user._id,
      post: proposal.post,
      student: proposal.student,
    });
    const res = await this.proposalModel.create(data);
    return res;
  }

  //get all proposal for admin of every post
  async getAllProposalByAdmin(): Promise<Proposal[]> {
    return await this.proposalModel
      .find({ status: 'ACCEPTED' })
      .populate('tutor', '-password')
      .populate('student', '-password')
      .populate('post');
  }

  //getAll Proposals of single post
  async getProposals(postId: string): Promise<Proposal[]> {
    const posts = await this.proposalModel
      .find({ post: postId })
      .populate('tutor', '-password')
      .populate('student', '-password')
      .populate('post')
      .exec();
    return posts;
  }
  //get My Students
  async getMyProposals(status: string, user: User): Promise<Proposal[]> {
    const condition =
      user?.role === 'STUDENT' ? { student: user._id } : { tutor: user._id };
    const posts = await this.proposalModel
      .find({ status, ...condition })
      .populate('tutor', '-password')
      .populate('student', '-password')
      .populate('post')
      .exec();
    return posts;
  }

  //getAllPropoposal by UserId
  async getProposalByUser(tutorId: string): Promise<Proposal[]> {
    const posts = await this.proposalModel.find({ tutor: tutorId });
    return posts;
  }

  //update post
  async manageProposal(proposalId: string, status: string): Promise<Proposal> {
    const update = { status };
    return await this.proposalModel.findOneAndUpdate(
      { _id: proposalId },
      update,
      { new: true },
    );
  }

  //deletePost
  async deletById(id: string) {
    const existing = await this.proposalModel.findById({ _id: id });
    if (!existing) {
      throw new NotFoundException(`post not found`);
    }
    await this.proposalModel.deleteOne({ _id: id });
    return true;
  }
}
